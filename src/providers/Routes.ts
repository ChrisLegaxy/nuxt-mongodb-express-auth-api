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

import { Application } from 'express';

import Locals from './Locals';

import apiRouter from '@routes/api';
import defaultRouter from '@routes/default';

class Routes {
  public static mountApi(_express: Application): Application {
    /** Define API Prefix */
    const apiPrefix = Locals.config().apiPrefix;

    /** API Routes */
    _express.use(`/${apiPrefix}`, apiRouter);

    /** Default Routes */
    _express.use('/', defaultRouter);

    return _express;
  }
}

export default Routes;
