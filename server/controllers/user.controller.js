const { userService } = require("../services");
const { createToken } = require("../utils/token");

async function login(req, res) {
    const { email, password } = req.body;
    const status = await userService.login(email, password);
    if (status) {
        const token = createToken({ email, password })
        res.json({ status, token });
    } else {
        res.json({ error: "failed" });
    }

}
async function getAll(req, res) {
    const users = await userService.getAll();
    res.json({ users })
}
async function register(req, res) {
    const { userData } = req.body;
    const status = await userService.register(userData);
    res.json({ status });
}

function updateById(req, res) {

}

function getById(req, res) {

}

module.exports = { register, updateById, getById, login, getAll }
