/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
if (process.env.NODE_ENV === "production") {
  require("./dist");
} else {
  require("nodemon")({ script: "dev.js" });
}
