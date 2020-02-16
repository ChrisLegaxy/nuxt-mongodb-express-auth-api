import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';

/**
 *
 *
 * @class RegisterValidator
 */
class LoginValidator {
  /**
   * Defines validation rules for RegistrationController
   *
   * @static
   * @returns {Array<ValidationChain>}
   * @memberof RegisterValidator
   */
  public static validationRules(): Array<ValidationChain> {
    return [
      body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email is not valid')
        .normalizeEmail({ gmail_remove_dots: false, all_lowercase: true }),
      body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
    ];
  }

  /**
   * Define middleware validation to validate request object after validation rules
   *
   * @static
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   * @returns {*}
   * @memberof RegisterValidator
   */
  public static validate(req: Request, res: Response, next: NextFunction): any {
    /** Validate req result after validation rules */
    const errors = validationResult(req);

    /** Continue if there is no errors */
    if (errors.isEmpty()) {
      return next();
    }

    /**
     * Defines errors and reduce the keys for seamless experience
     *
     * @type {Array<object>}
     */
    const extractedErrors: Array<object> = [];
    errors.array().map(err => extractedErrors.push({ warning: [err.msg] }));

    return res.status(422).json({
      success: false,
      status: 422,
      extractedErrors
    });
  }
}

export default LoginValidator;
