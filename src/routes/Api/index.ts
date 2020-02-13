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

import { Router, Request, Response, NextFunction } from 'express';

import RegisterController from '../../controllers/Api/Auth/Register';
import RegisterValidator from '../../middlewares/validators/RegisterValidator';
import { check, validationResult, body } from 'express-validator';
import e = require('express');

/** Initialize express router */
const router = Router();

router.post(
  '/auth/register', 
  RegisterValidator.validationRules(),
  RegisterValidator.validate,
  RegisterController.perform
);

router.post('/auth/login', (req: Request, res: Response): any => {
  res.status(404).json({
    success: false,
    error: 404,
    message: 'API underconstruction'
  });
});

export default router;
