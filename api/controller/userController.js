/* eslint-disable class-methods-use-this */
import passport from "passport";
import utils from "../lib/utils";
import logger from "../config/winstonlog";

const getToken = (user, statusCode, res) => {
  const tokenObject = utils.issueJWT(user);
  const { token, expires } = tokenObject;

  res.status(statusCode).send({
    status: "success",
    token,
    expires,
    data: {
      user,
    },
  });
};
class User {
  static async createUser(req, res, next) {
    passport.authenticate(
      "signup",
      { session: false },
      async (err, user, info) => {
        try {
          if (err || !user) {
            const { statusCode = 400, message } = info;
            return res.status(statusCode).send({
              status: "error",
              error: {
                message,
              },
            });
          }
          res.send({ success: true, user });
          logger.info("created new user");
        } catch (error) {
          res.status(400).send(error);
        }
        return false;
      }
    )(req, res, next);

    return false;
  }

  static async loginUser(req, res, next) {
    passport.authenticate(
      "login",
      { session: false },
      async (err, user, info) => {
        try {
          if (err || !user) {
            const { statusCode = 400, message } = info;
            return res.status(statusCode).send({
              status: "error",
              error: {
                message,
              },
            });
          }
          getToken(user, 200, res);
          logger.info("User Successfully Logged In");
        } catch (error) {
          res.status(400).send(error);
        }
        return false;
      }
    )(req, res, next);
  }

  static async protectedRoute(req, res) {
    res.send("Your Authorization is confirmed!");
  }
}

export default User;
