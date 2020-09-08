/* eslint-disable class-methods-use-this */
import bcrypt from "bcryptjs";
import UserDb from "../models/user";
import signupValidator from "../middleware/validator";
import logger from "../config/winstonlog";

class User {
  static async createUser(req, res) {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // enter param
    const newUser = new UserDb({
      email: req.body.email,
      password: hashPassword,
    });
    // validate param
    const { error } = signupValidator(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    // check if email already exist
    const checkEmail = await UserDb.findOne({ email: req.body.email });
    if (checkEmail) {
      return res.status(400).send("Email already exist");
    }
    // create a new user
    try {
      const savedUser = await newUser.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }

    logger.info("created new user");
    return false;
  }
}

export default User;
