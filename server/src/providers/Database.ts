import mongoose from 'mongoose';
import Locals from './Locals';


/**
 *
 *
 * @export
 * @class Database
 */
export class Database {
  /**
   *
   *
   * @static
   * @returns {*}
   * @memberof Database
   */
  public static init(): any {
    /** Declare the following:
     * @type {string} dataSource - Database URL (Connection String)
     * @type {object} options - Mongoose Options
     */

    /**
     *
     * @type {Application}
     */

    const dataSource = Locals.config().dsn;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    /** Had to be used in order to not get console error */
    mongoose.set('useCreateIndex', true);

    /** Declare Mongoose Promise */
    mongoose.Promise = Promise;

    /** Return Mongoose Connection Function */
    return mongoose.connect(dataSource, options, error => {
      if (error) {
        console.log(error);
      } else {
        console.log('Database :: Connected successfully');
      }
    });
  }
}

export default mongoose;
