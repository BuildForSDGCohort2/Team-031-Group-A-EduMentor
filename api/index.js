import express from "express";
import path from "path";
import loader from "./loaders";
import config from "./config";
import Database from "./config/dbConnection";

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

export default app;
