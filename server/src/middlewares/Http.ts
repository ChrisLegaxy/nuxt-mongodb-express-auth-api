/**
 *
 * @author Chris <chris.legaxy@gmail.com>
 */
import express, { Application } from 'express';
import cors from 'cors';

/**
 * This class is used to define all requisites in HTTP
 *
 * @class Http
 */
class Http {
  /**
   *
   *
   * @static
   * @param {Application} _express
   * @returns {Application}
   * @memberof Http
   */
  public static mount(_express: Application): Application {
    /**
     * Enables request json body parser
     */
    _express.use(express.json());

    /**
     * Url Encoded
     */
    _express.use(express.urlencoded({ extended: false }));

    /**
     * Enables Cross Origin Resource Sharing
     */
    _express.use(cors());

    return _express;
  }
}

export default Http;
