const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

function createTokenForUser(username, admin = false) {
  let payload = { username, admin };
  return jwt.sign(payload, SECRET_KEY);
}


module.exports = { createTokenForUser };