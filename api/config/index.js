import dotenv from "dotenv";

dotenv.config();

module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  DbUrl: process.env.DB_URL,
};
