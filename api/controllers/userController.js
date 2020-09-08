import validator from "../middleware/validator";
import logger from "../config/winstonlog";
import userService from "../services/userService";

class User {
  static async createUser(req, res) {
    // validate param
    const { error } = validator(req.body);
    if (error) { return res.status(400).send(error.details[0].message); }

    // extract arguments from request
    const { email, password } = req.body;
    // pass to service, service returns a Promise
    const user = await userService.createUser({ email, password });
    user
      .then(() => logger.info("created new user"))
      .catch((err) => {
        logger.warn(`Error creating user: ${err}`);
        res.status(400).send(err);
      });
    // return response from service
    res.send(user);
    return true;
  }

  static async getUser(req, res) {
    // extract argument from request
    const { email } = req.params;
    // pass to service, service returns a Promise
    const user = await userService.getUser(email);
    user
      .catch((err) => {
        logger.warn(`Error fetching user: ${err}`);
        res.status(400).send(err);
      });
    // return response from service
    res.send(user);
    return true;
  }
}

export default User;
