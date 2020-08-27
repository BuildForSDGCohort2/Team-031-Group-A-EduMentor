import dependencyManager from "../lib/dependencyManager";
import config from "./index";
const mongoose = require("mongoose");

dependencyManager.register("logger", () => {
  require("../lib/logger").create(config.logging.development);
});

dependencyManager.register("mongoose", () => {
  return mongoose;
});
