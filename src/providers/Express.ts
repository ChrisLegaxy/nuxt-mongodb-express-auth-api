import express, { Application, Request, Response } from 'express';

import Locals from './Locals';
import Kernel from '../middlewares/Kernel';


/**
 *
 *
 * @class Express
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

    this.mountMiddlewares();
    this.mountRoutes();
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
    
  }
  
  /**
   * Initialize express server
   *
   * @returns {*} - Return express listen() method
   * @memberof Express
   */
  public init() : any {
    /** 
     * Declaration
     * 
     * @type {number} port - PORT that the server will run on
     */
    const port: number = Locals.config().port;

    /** 
     * Express server initializing by listen() and on('error') is for error handling
     */
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
