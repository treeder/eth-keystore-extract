var keyth = require('keythereum')
const fs = require('fs');

let rawdata = fs.readFileSync('keystore.json');
let keyobj = JSON.parse(rawdata);

let password = process.argv[2];
let privateKey = keyth.recover(password, keyobj)

console.log(privateKey.toString('hex'))
Save 
