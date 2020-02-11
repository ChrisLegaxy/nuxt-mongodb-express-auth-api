import express, { Application } from 'express';

import Locals from './Locals';
import Kernel from '../middlewares/Kernel';

class Express {
  /** Declaration
   * @type {Application} express - Express Application
   */
  private express: express.Application;

  /** Constructor
   * After Express is initialize the following will be perform
   * - Mount All Middlewares
   * - Mount All Routes
   */
  constructor() {
    this.express = express();

    this.mountMiddlewares();
    this.mountRoutes();
  }

  /** Mount All Middlewares */
  private mountMiddlewares(): void {}

  /** Mount All Routes */
  private mountRoutes(): void {
    this.express = Kernel.init(this.express);
  }

  /* Initialize Express Server */
  public init(): any {
    /** Declaration
     * @type {number} port - PORT that the server will run on
     */
    const port: number = Locals.config().port;

    /** Express Server Initializing by listen() and on('error') is for error handling */
    this.express
      .listen(port, () => {
        return console.log(`Server :: Running @ 'http://localhost:${port}'`);
      })
      .on('error', error => {
        return console.log(error);
      });
  }
}

export default new Express();
