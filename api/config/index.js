import dotenv from "dotenv";

dotenv.config();

module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  DbUrl: process.env.DB_URL,
  PRIV_KEY: process.env.PRIV_KEY.replace(/\s\s/g, "\n"),
  PUB_KEY: process.env.PUB_KEY.replace(/\s\s/g, "\n"),
};
