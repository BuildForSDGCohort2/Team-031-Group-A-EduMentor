import User from "../models/user";

/**
   *
   * @param {*} email
   * @param {*} password
   */
function createUser(body) {
  return new Promise((resolve, reject) => {
    const { email, password } = body;
    // check if the user already exists
    if (User.checkField("email", email)) reject(new Error("User exists"));
    // create new user
    const newUser = new User();
    newUser.email = email;
    newUser.password = User.encryptPassword(password);
    const user = newUser.save();
    resolve(user);
  });
}

/**
   *
   * @param {String} email
   * @desc - Returns a promise that resolves with a user object gotten by email
   */
function getUser(email) {
  return new Promise((resolve, reject) => {
    const user = User.findOne({ email });

    if (!user) reject(new Error("User does not exist"));

    resolve(user);
  });
}

export default () => ({ createUser, getUser });
