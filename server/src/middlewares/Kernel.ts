import { Application } from 'express';

import Http from './Http';

class Kernel {
  public static init(express: Application): Application {
    express = Http.mount(express);

    return express;
  }
}

export default Kernel;
