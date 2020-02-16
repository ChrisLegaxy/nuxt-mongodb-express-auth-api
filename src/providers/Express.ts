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

import express, { Application } from 'express';

import Locals from './Locals';
import Routes from './Routes';

import Kernel from '../middlewares/Kernel';

/**
 *
 *
 * @class Express
 * 
 * @constructor
 * Creates an instance of Express.
 *
 * After Express is initialize the following will be perform:
 * - Mount all middlewares
 * - Mount all express
 */
class Express {
  /**
   * Declaration
   *
   * @private
   * @type {Application} express - express application
   * @memberof Express
   */
  private express: Application;

  /**

   *
   * @memberof Express
   */
  constructor() {
    this.express = express();

    this.mountDotEnv();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  /**
   * Mount dotenv into the express's locals
   *
   * @private
   * @memberof Express
   */
  private mountDotEnv(): void {
    this.express = Locals.init(this.express)
  }

  /**
   * Mount all middlewares
   *
   * @private
   * @memberof Express
   */
  private mountMiddlewares(): void {
    this.express = Kernel.init(this.express);
  }

  /**
   * Mount all routes
   *z
   * @private
   * @memberof Express
   */
  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }

  /**
   * Initialize express server
   *
   * @returns {*} - Return express listen() method
   * @memberof Express
   */
  public init(): any {
    /** Define port */
    const port: Number = Locals.config().port;

    /** Express server initializing by listen() and on('error') is for error handling */
    return this.express
      .listen(port, () => {
        return console.log(`Server :: Running @ 'http://localhost:${port}'`);
      })
      .on('error', error => {
        return console.log(error);
      });
  }

  public returnExpress() {
    return this.express;
  }
}

export default new Express();
