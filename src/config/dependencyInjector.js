import dependencyManager from "../lib/dependencyManager";
import config from "./index";

const mongoose = require("mongoose");
const logger = require("../lib/logger").create(config.logging.development);

dependencyManager.register("logger", () => logger);

dependencyManager.register("mongoose", () => mongoose);
