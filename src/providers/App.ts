import Express from './Express';
import { Database } from './Database';
import Locals from './Locals'


/**
 *
 *
 * @class App
 */
class App {
  /**
   * Load all configurations
   *
   * @returns {*}
   * @memberof App
   */
  public loadConfiguration() : any {
    return Locals.load()
  }
  
  /**
   * Initialize database connection
   *
   * @returns {*}
   * @memberof App
   */
  public loadDatabase() : any {
    return Database.init();
  }

  /**
   * Start node server
   *
   * @returns {*}
   * @memberof App
   */
  public loadServer() : any {
    return new Express().init();
  }
}

export default new App();
