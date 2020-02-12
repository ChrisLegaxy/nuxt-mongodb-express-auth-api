import App from './providers/App';

import cluster from 'cluster'

/** 
 * Running async 
 * because 
 * The database needs to be connected before the server runs
 */
(async () => {
  await App.loadConfiguration();
  await App.loadDatabase();
  await App.loadServer();
})();
