const { user } = require("../models");

function login(email, password) {
  const status = user.findOne({ where: { email, password } })
  return status;
}

function register(userData) {
  return user.create(userData);
}

function getAll() {
  return user.findAll({});
}

module.exports = { login, register, getAll }


