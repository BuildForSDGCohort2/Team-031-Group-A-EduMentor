module.exports = {
  nodeEnv: process.env.NODE_ENV,
  devDbUri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@edumentor.5kxd0.mongodb.net/edumentor?retryWrites=true&w=majority`,
  prodDbUri: "",
};
