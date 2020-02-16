/**
 * @file
 *
 * @description
 *
 * @author       Chris <chris.legaxy@gmail.com>
 * @copyright    CPC
 * @since        1.0.0
 * @version      1.0.0
 */

import { Request, Response } from 'express';

import User from '../../../models/User';

class Register {
  /**
   *
   *
   * @static
   * @param {Request} req
   * @param {Response} res
   * @returns {*}
   * @memberof Register
   */
  public static perform(req: Request, res: Response): any {
    const name: String = req.body.name;
    const email: String = req.body.email;
    const password: String = req.body.password;

    const user = new User({
      name,
      email,
      password
    });

    /** Check if this user exists before registration */
    User.findOne({ email }, async (err, existingUser) => {
      /** Error Handling */
      if (err) {
        return res.json({
          error: err
        });
      }
      
      /** Check if user exists */
      if (existingUser) {
        return res.status(403).json({
          success: false,
          status: 403,
          message: 'Account with email already exists'
        });
      }

      /** Save user to the database */
      await user.save(err => {
        if (err) {
          return res.status(422).json({
            success: false,
            status: 422,
            message: ['An error occured during registration'],
            error: err
          });
        }

        return res.status(200).json({
          success: true,
          status: 200,
          message: [
            `You have successfully been registered, Welcome ${user.name}!`
          ],
          data: {
            name: user.name,
            email: user.email
          }
        });
      });
    });
  }
}

export default Register;
