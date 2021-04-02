const jwt = require('jsonwebtoken');

function createToken(data) {
    const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: "1h" });
    return token;
}

function checkToken(token) {
    var decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded;

}

module.exports = { createToken, checkToken }

