const fs = require("fs/promises")

function log(msg) {
    let date = new Date();
    fs.appendFile(__dirname + '\\..\\database.log', date.toLocaleDateString() + "-" + date.toLocaleTimeString() + "  " + msg + "\n");
}

module.exports = { log }