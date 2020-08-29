import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./winstonlog";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// We need to define the DB_URL
const uri = process.env.DB_URL;

// Connection establishment
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => logger.info("Database Connection established successfully"))
  .catch((err) => logger.info("Error occurred in db connection:", err));

// Models
// const db = mongoose.connection;

export default mongoose;
