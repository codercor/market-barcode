const {user} = require("../models");

function login(email,password) {
  const status = user.findOne({where:{email,password}})
  return status;
}

function register(userData) {
  return user.create(userData);
}

module.exports = {login,register}


