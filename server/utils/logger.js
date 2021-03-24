const fs = require("fs/promises")

function log(msg) {
    fs.appendFile(__dirname + '\\..\\database.log', msg + "\n");
}

module.exports = { log }