const { checkToken } = require("../utils/token")

function auth(req, res, next) {
  const { token } = req.headers;

  try {
    let decoded = checkToken(token);
    req.companyId = decoded.id;
    next();
  } catch (error) {
    res.json({ status: "Permission denied" })
  }

}

module.exports = auth;