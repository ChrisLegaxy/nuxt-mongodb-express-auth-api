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

import Http from './Http';
import CORS from './CORS';

import Locals from '../providers/Locals'

/**
 * Root class to mount all middlewares
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
    
    /** Mounts basic express middlewares */
    _express = Http.mount(_express);

    return _express;
  }
}

export default Kernel;
