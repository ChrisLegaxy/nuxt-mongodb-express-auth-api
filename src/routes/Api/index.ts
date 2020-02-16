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

import { Router, Request, Response } from 'express';

import RegisterController from '../../controllers/api/auth/Register';
import RegisterValidator from '../../middlewares/validators/Register';

import LoginController from '../../controllers/api/auth/Login';
import LoginValidator from '../../middlewares/validators/Login';

/** Initialize express router */
const router = Router();

router.post(
  '/auth/register',
  RegisterValidator.validationRules(),
  RegisterValidator.validate,
  RegisterController.perform
);

router.post(
  '/auth/login',
  LoginValidator.validationRules(),
  LoginValidator.validate,
  LoginController.perform
);

export default router;
