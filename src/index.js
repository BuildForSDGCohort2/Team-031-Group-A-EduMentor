import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";
import dependencyInjector from "./config/dependencyInjector";

async function startServer() {
  const app = express();
  const logger = dependencyInjector.get("logger");
  app.use(cors());
  app.use(bodyParser.json());
  app.use(helmet());

  app.listen(config.port || 3000, () => {
    logger.info(`Server listening on port ${config.port}`);
  });
}

startServer();
