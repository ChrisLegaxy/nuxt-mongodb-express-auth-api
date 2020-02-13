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
	 * @description
	 * 
	 * Mount CORS
	 * 
	 * @param   {Application} _express - express application
	 * @returns {Application}
	 * 
	 * @memberof CORS
	 */
	public static mount(_express: Application): Application {
		/** Define CORS options */
		const options = {
			origin: Locals.config().url,
			optionsSuccessStatus: 200		// Some legacy browsers choke on 204
		};

		/** Enables CORS with options */
		_express.use(cors(options));

		return _express;
	}
}

export default CORS;
