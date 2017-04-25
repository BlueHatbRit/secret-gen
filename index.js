const crypto = require('crypto');

const str = crypto.randomBytes(64).toString('hex');

console.log(str);
