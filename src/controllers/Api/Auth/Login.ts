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

import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import Locals from '../../../providers/Locals';
import User from '../../../models/User';

/**
 *
 *
 * @class Login
 */
class Login {
  /**
   *
   *
   * @static
   * @param {Request} req
   * @param {Response} res
   * @returns {*}
   * @memberof Login
   */
  public static perform(req: Request, res: Response): any {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }, (err, user) => {
      if (err) {
        return res.json({
          error: err
        });
      }

      if (!user) {
        return res.json({
          success: false,
          message: ['User not found']
        });
      }

      user.comparePassword(password, (err: Error, isMatched: Boolean) => {
        if (err) {
          return res.json({
            error: err
          });
        }

        if (!isMatched) {
          return res.json({
            success: false,
            message: ['Your password is incorrect']
          });
        }

        const token = jwt.sign({ user }, Locals.config().appSecret, {
          algorithm: 'HS512',
          expiresIn: Locals.config().jwtExpiresIn * 60
        });

        return res.json({
          success: true,
          status: 200,
          message: [`Welcome ${user.name}`],
          token,
          tokenExpiresIn: Locals.config().jwtExpiresIn * 60
        });
      });
    });
  }
}

export default Login;
