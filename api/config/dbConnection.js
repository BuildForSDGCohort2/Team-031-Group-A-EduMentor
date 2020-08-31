import mongoose from "mongoose";
import logger from "./winstonlog";

class Database {
  constructor() {
    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
    this.options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
  }

  /**
   * @param {String} - Database connection URL
   * @description - Initiates a DB connection based on provided URI
  */
  async connect(host) {
    await this.mongoose.connect(host, this.options)
      .then(() => logger.info("Database connected successfully"))
      .catch((error) => logger.info(`Error connecting to Database: ${error}`));

    // Close connection on process termination
    process.on("SIGINT", () => {
      this.mongoose.connection.close();
      logger.info("Database connection closed due to NodeJS process termination.");
    });
  }
}

export default Database;
