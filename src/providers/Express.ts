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

import Kernel from '../middlewares/Kernel';
import Locals from './Locals';
import Routes from './Routes';

/**
 * @description  Define express server
 * @class        Express
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
   * Creates an instance of Express.
   *
   * After Express is initialize the following will be perform:
   * - Mount all middlewares
   * - Mount all express
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
    this.express = Locals.init(this.express);
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
   *
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
}

export default Express;
