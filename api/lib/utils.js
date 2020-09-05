import jsonwebtoken from "jsonwebtoken";
import fs from "fs";
import path from "path";

const pathToKey = path.join(__dirname, "..", "..", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

function issueJWT(user) {
  const { _id } = user;

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
}

module.exports.issueJWT = issueJWT;
