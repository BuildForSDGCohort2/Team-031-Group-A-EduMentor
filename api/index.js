import express from "express";
import path from "path";
import passport from "passport";
import loader from "./loaders";
import config from "./config";
import Database from "./config/dbConnection";
import userRouter from "./route/userRoute";
import "./services/passport-local";

const app = express();

// Initialize database connection
const db = new Database();
db.connect(config.DbUrl);

// Initialize app with dependencies and error handlers
loader.init(app);

// Pass the global passport object into the configuration function
require("./config/passport")(passport);

// Initialize passport
app.use(passport.initialize());

// To use other UI routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src/index.html"));
});

app.use("/api/v1/user", userRouter);

export default app;
