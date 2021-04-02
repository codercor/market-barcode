const { checkToken } = require("../utils/token")

function auth(req, res, next) {
  const { token } = req.headers;

  try {
    checkToken(token);
    next();
  } catch (error) {
    res.json({ status: "Permission denied" })
  }

}

module.exports = auth;