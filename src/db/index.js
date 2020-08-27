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
    const { connection } = this.mongoose;
    connection.on("connected", () => logger.info("Databases Connection was Successful"));
    connection.on("error", (err) => logger.info(`Database Connection Failed ${err}`));
    connection.on("disconnected", () => logger.info("Database Connection Disconnected"));
    process.on("SIGINT", () => {
      connection.close();
      logger.info(
        "Database Connection closed due to NodeJs process termination"
      );
      process.exit(0);
    });
  }
}

module.exports = Database;
