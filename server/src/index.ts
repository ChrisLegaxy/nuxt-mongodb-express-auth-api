import App from './providers/App';

/** Running Async Because 
 * The Database needs to be connected before the Server runs
 */
(async () => {
  await App.loadConfiguration();
  await App.loadDatabase();
  await App.loadServer();
})();
