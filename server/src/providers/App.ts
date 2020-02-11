import Express from './Express';
import { Database } from './Database';

import dotenv from 'dotenv';

class App {
  /** Load Configurations */
  public loadConfiguration() {
    return (() => {
      dotenv.config();
      console.log(`Configuration loaded sucessfully`);
    })();
  }

  /** Initialize Database Connection */
  public loadDatabase() {
    return Database.init();
  }

  /** Start Node Server */
  public loadServer() {
    return Express.init();
  }
}

export default new App();
