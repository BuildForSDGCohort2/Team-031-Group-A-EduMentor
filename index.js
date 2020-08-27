/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
if (process.env.NODE_ENV === "production") {
  // eslint-disable-next-line import/no-unresolved
  require("./dist");
} else {
  require("nodemon")({ script: "dev.js" });
}
