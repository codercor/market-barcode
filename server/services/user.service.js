const { user } = require("../models");

function login(email, password) {
  const result = user.findOne({ where: { email, password } })
  return result;
}

function register(userData) {
  return user.create(userData);
}

function getAll() {
  return user.findAll({});
}

module.exports = { login, register, getAll }


