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

/** Initialize express router */
const router = Router();

router.all('*', (req: Request, res: Response): any => {
  res.status(404).json({
    success: false,
    status: '404 Not Found',
    message: 'Invalid route'
  });
});

export default router;
