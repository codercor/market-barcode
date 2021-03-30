const jwt = require('jsonwebtoken');
  
function createToken(data) {
    const token = jwt.sign(data , process.env.JWT_KEY);
    return token;
}

function checkToken(token) {
    var decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded;

}

module.exports = {createToken,checkToken}

