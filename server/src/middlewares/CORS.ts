/**
 *
 * @author Chris <chris.legaxy@gmail.com>
 */
import cors from 'cors';
import { Application } from 'express';

import Locals from '../providers/Locals';


/**
 * Enables the CORS
 *
 * @class CORS
 */
class CORS {

	/**
	 *
	 *
	 * @param {Application} _express - express application
	 * @returns {Application}
	 * @memberof CORS
	 */
	public static mount(_express: Application): Application {
		/**
		 * CORS options
		 * 
		 * @type {object}
		 */
		const options = {
			origin: Locals.config().url,
			optionsSuccessStatus: 200		// Some legacy browsers choke on 204
		};

		/**
		 * Enable CORS with options
		 */
		_express.use(cors(options));

		return _express;
	}
}

export default CORS;
