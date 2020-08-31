import express from "express";
import path from "path";
import loader from "./api/loaders";
import config from "./api/config";
import Database from "./api/config/dbConnection";
import logger from "./api/config/winstonlog";

const app = express();

// Initialize database connection
const db = new Database();
db.connect(config.DbUrl);

// Initialize app with dependencies and error handlers
loader.init(app);

// To use other UI routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/index.html"));
});

app.listen(config.port || 5000, (event) => {
  if (event) { logger.info(event); } else { logger.info(`listening on port: ${config.port}`); }
});
