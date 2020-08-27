import dependencyManager from "../lib/dependencyManager";
import logger from "../lib/logger";

class Database {
  constructor(username, password) {
    this.mongoose = dependencyManager.get("mongoose");
    this.connect(username, password);
  }

  async connect(username, password) {
    this.mongoose.Promise = global.Promise;
    this.mongoose.connect(`mongodb+srv://${username}:${password}@edumentor.5kxd0.mongodb.net/<dbname>?retryWrites=true&w=majority`);
    this.mongoose.connection.on("connected", () => logger.info("Databases Connection was Successful"));
    this.mongoose.connection.on("error", (err) => logger.info(`Database Connection Failed ${err}`));
    this.mongoose.connection.on("disconnected", () => logger.info("Database Connection Disconnected"));
    process.on("SIGINT", () => {
      this.mongoose.connection.close();
      logger.info(
        "Database Connection closed due to NodeJs process termination"
      );
      process.exit(0);
    });
  }
}
module.exports = Database;
