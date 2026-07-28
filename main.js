const crypto = require('crypto');

const email = "user@example.com"; // Remplacez par votre email
const uuid = "fd330f6f-3f41-421d-9fe5-de742d0c54c0";

const hash = crypto.createHash('md5').update(uuid + email).digest('hex');
const licenseKey = hash.substring(0, 25).match(/.{1,5}/g).join('-');

console.log("Email :", email);
console.log("Clé de licence :", licenseKey);