import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationChain } from 'express-validator';

/**
 *
 *
 * @class RegisterValidator
 */
class RegisterValidator {
  /**
   * Defines validation rules for RegistrationController
   *
   * @static
   * @returns {Array<ValidationChain>}
   * @memberof RegisterValidator
   */
  public static validationRules(): Array<ValidationChain> {
    return [
      body('username')
        .notEmpty()
        .withMessage('Email cannot be blank')
        .isEmail()
        .withMessage('Email is not valid')
        .normalizeEmail({ gmail_remove_dots: false, all_lowercase: true }),
      body('password')
        .notEmpty()
        .withMessage('Password cannot be blank')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters'),
      body('confirmPassword')
        .notEmpty()
        .withMessage('Password confirmation cannot be blank')
        /**
         * Custom function is used to compare if password is equals to confirmPassword
         *
         * We can't use equals function as we can't access req object
         *
         * @param {string} value - value that we got from body('confirmPassword')
         * @param {object} { req } - an optional req object that cannot be type defined as it will execute
         *                           during runtime, the server will know and get req object to return req.body.password
         */
        .custom((confirmPassword, { req }) => {
          if (confirmPassword != req.body.password) {
            throw new Error('Password confirmation does not match password');
          } else {
            return true;
          }
        })
        .withMessage('Password confirmation does not match')
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
    errors.array().map(err => extractedErrors.push({ [err.param]: [err.msg] }));

    return res.status(422).json({
      success: false,
      status: 422,
      extractedErrors
    });
  }
}

export default RegisterValidator;
