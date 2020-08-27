module.exports = {
	node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  logging: {
	  development: {
      console: true,
      level: "info",
    },
    production: {
      file: true,
      level: "info"
    }
  },
  developmentDb: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD
  },
  productionDb: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD
  }
};
