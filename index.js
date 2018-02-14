var crypto = require('crypto');

function generateSecret(len) {
    return crypto.randomBytes(len / 2).toString("hex");
}

module.exports = generateSecret;
