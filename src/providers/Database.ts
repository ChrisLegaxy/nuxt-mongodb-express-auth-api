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

import mongoose from 'mongoose';
import { MongoError } from 'mongodb';

import Locals from './Locals';

class Database {
  /**
   *
   *
   * @static
   * @returns {*}
   * @memberof Database
   */

  public static init(): Promise<object> {
    /** Declare the following:
     * @type {string} dataSource - Database URL (Connection String)
     * @type {object} options - Mongoose Options
     */
    const dataSource = Locals.config().mongooseUrl;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    /** Had to be used in order to not get console error */
    mongoose.set('useCreateIndex', true);

    /** Declare mongoose promise*/
    mongoose.Promise = Promise;

    /** Return mongoose connection promise */
    return mongoose.connect(dataSource, options, (error: MongoError) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Database :: Connected successfully');
      }
    });
  }
}

export default Database;
