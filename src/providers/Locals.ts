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
import dotevn from 'dotenv';

/**
 * Define app's locals and config
 *
 * @class Locals
 */
class Locals {
  /**
   *
   *
   * @static
   * @returns {*}
   * @memberof Locals
   */
  public static load(): Promise<void> {
    return (async () => {
      await dotevn.config()
      console.log('Configuration :: Loaded sucessfully');
    })();
  }

  /**
   * Define all configurations for the server
   *
   * @static
   * @returns {*} - Return in alphabetical order
   */
  public static config(): any {
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const port = process.env.PORT || 3000;
    const appSecret = process.env.APP_SECRET || '';
    const mongooseUrl = process.env.MONGOOSE_URL || '';

    const isCORSEnabled = process.env.CORS_ENABLED || true;

    const apiPrefix = process.env.API_PREFIX || 'api';

    return {
      apiPrefix,
      appSecret,
      isCORSEnabled,
      mongooseUrl,
      port,
      url
    };
  }

  /**
   * Injects your config to the app's locals
   *
   * @static
   * @param   {Application} _express
   * @returns {Application}
   * @memberof Locals
   */
  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
