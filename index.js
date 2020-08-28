import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
// eslint-disable-next-line no-unused-vars
import { logger, dbConnection } from "./api/config";

// initialize new express app
const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(cors());
app.use(express.json());

// To use other UI routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/index.html"));
});

app.use((err, req, res, next) => {
  logger.info(err.stack);
  res.status(500);
  res.render("There was an Error processing your request. Something\"s broken! Check your data and try again", { error: err });
  next();
});

const hostname = process.env.HOST;
const port = process.env.PORT;
app.listen(port, hostname, (e) => {
  if (e) { logger.info(e); } else logger.info(`listening at http://${hostname}:${port}`);
});
