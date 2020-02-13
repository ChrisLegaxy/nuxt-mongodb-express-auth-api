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

import Express from './Express';
import Database from './Database';
import Locals from './Locals';

class App {
  /**
   * Clear the console
   *
   * @returns {Boolean}
   * @memberof App
   */
  public clearConsole(): Boolean {
    return process.stdout.write('\x1B[2J\x1B[0f');
  }

  /**
   * Load all configurations
   *
   * @returns {Function}
   * @memberof App
   */
  public loadConfiguration(): Promise<void> {
    return Locals.load();
  }

  /**
   * Initialize database connection
   *
   * @returns {Promise<object>}
   * @memberof App
   */
  public loadDatabase(): Promise<object> {
    return Database.init();
  }

  /**
   * Instantiate & start server
   *
   * @returns {Function}
   * @memberof App
   */
  public loadServer(): Function {
    return new Express().init();
  }
}

export default new App();
