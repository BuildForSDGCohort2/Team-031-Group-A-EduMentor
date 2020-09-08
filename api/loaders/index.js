import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "../config/winstonlog";
import getRoutes from "../routes";

export default {
  init: (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    // Mount API routes
    app.use("/api", getRoutes());
    app.use((err, req, res, next) => {
      logger.info(err.stack);
      res.status(500);
      res.render("There was an Error processing your request. Something\"s broken! Check your data and try again", { error: err });
      next();
    });
  },
};
