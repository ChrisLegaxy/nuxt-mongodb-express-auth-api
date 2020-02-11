import { Application } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';

class Http {
  public static mount(express: Application): Application {
    /** Json Body Parser */
    express.use(bodyParser.json());

    /** Url Encoded */
    express.use(
      bodyParser.urlencoded({
        extended: false
      })
    );

    /** Cross Site Origin */
    express.use(cors());

    return express;
  }
}

export default Http;
