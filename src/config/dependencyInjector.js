import dependencyManager from "../lib/dependencyManager";
import config from "./index";

dependencyManager.register("logger", () => {
  require("../lib/logger").create(config.logging.development);
});

dependencyManager.register("mongoose", () => {
  require("mongoose");
});
