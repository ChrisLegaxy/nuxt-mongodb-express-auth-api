import dotevn from 'dotenv'


/**
 *
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
  public static load() : any {
    return (()=> {
      dotevn.config(),
      console.log("Configuration :: Loaded sucessfully")
    })()
  }
  
  /**
   *
   *
   * @static
   * @returns {*}
   * @memberof Locals
   */
  public static config(): any {
    const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
    const port = process.env.PORT || 3000;

    const dsn = process.env.DSN || '';

    const appSecret = process.env.APP_SECRET || '';

    const isCORSEnabled = process.env.CORS_ENABLED || true;

    return {
      url,
      port,
      dsn,
      appSecret,
      isCORSEnabled
    };
  }
}

export default Locals;
