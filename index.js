import app from "./api";
import config from "./api/config";
import logger from "./api/config/winstonlog";
import userRouter from "./api/route/userRoute";

/**
 *
 * @param {Object} server
 * @desc - Sets up handlers for different exit events,
 * to ensure server closes properly and for testing control
 */
function setupExitHandlers(server) {
  // https://stackoverflow.com/a/14032965/971592
  async function exitHandler(options = {}) {
    await server
      .close()
      .then(() => {
        logger.info("Server closed succesfully");
        if (options.exit) {
          process.exit(1);
        }
      })
      .catch((error) => logger.warn(`Error closing server: ${error.stack}`));
  }
  // do something when app is closing
  process.on("exit", exitHandler);
  // catches ctrl + c event
  process.on("SIGINT", exitHandler.bind(null, { exit: true }));
  // catches "kill pid" e.g nodemon restarts
  process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
  process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));
  // catches uncaught exceptions
  process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
}

/**
 *
 * @param {Object} Configuration object
 * @des - Starts the server on the provided port
 * @returns - a Promise that resolves with the Http.Server object
 */
function startServer({ port = process.env.PORT } = {}) {
  return new Promise((resolve) => {
    // app.listen returns a server object
    const server = app.listen(port || 3000, (event) => {
      if (event) { logger.info(event); } else { logger.info(`listening on port: ${server.address().port}`); }

      // wrap .close method of server object with a promise
      // first we save a binding of the original close(), piggy Backing 🤐
      const originalClose = server.close.bind(server);

      // then overwrite it to return a Promise
      server.close = () => new Promise(() => {
        originalClose();
      });
    });
    // Setup handlers for different process termination events
    setupExitHandlers(server);
    resolve(server);
  });
}
// Start the server
startServer({ port: config.port })
  .catch((error) => {
    logger.warn(`Error starting server: ${error.stack}`);
    process.exit(1);
  });
