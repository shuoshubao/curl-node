const fs = require('fs');
const path = require('path');
const os = require('os');

const homedir = os.homedir();

const ConfigPath = path.resolve(homedir, 'Library/Application\ Support/Code/User/settings.json');

console.log(fs.readFileSync(ConfigPath).toString());
