/**
 *
 * @author Chris <chris.legaxy@gmail.com>
 */
import { Application } from 'express';

import Http from './Http';
import CORS from './CORS';

import Locals from '../providers/Locals'

/**
 *
 *
 * @class Kernel
 */
class Kernel {
  /**
   * Mount all middlewares
   *
   * @static
   * @param {Application} _express
   * @returns {Application}
   * @memberof Kernel
   */
  public static init(_express: Application): Application {
    /**
     * Check if CORS is enabled
     * Then
     * Mount CORS middleware
     */
    if (Locals.config().isCORSEnabled) {
      _express = CORS.mount(_express);
    }
    
    /**
     * Mount basic express middlewares
     */
    _express = Http.mount(_express);

    return _express;
  }
}

export default Kernel;
