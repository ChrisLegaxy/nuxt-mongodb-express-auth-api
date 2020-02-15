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

import App from './providers/App';
/**
 * Running async
 * because
 * The database needs to be connected before the server runs
 */

const run = async () => {
  /**
   * Clear console before execution
   */
  await App.clearConsole();

  /**
   * Load all configurations
   */
  await App.loadConfiguration();

  /**
   * Connect to database before starting the server
   */
  await App.loadDatabase();

  /**
   * Server starts
   */
  App.loadServer();
};

/**
 * Starts execution
 */
run();
