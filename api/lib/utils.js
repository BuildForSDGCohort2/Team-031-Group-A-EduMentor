import jsonwebtoken from "jsonwebtoken";
import config from "../config";

const { PRIV_KEY } = config;

const issueJWT = ({ _id }) => {
  const expiresIn = "7d";

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn,
    algorithm: "RS256",
  });

  return {
    token: `Bearer ${signedToken}`,
    expires: expiresIn,
  };
};

module.exports.issueJWT = issueJWT;
