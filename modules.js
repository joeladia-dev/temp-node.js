// CommonJS, every file is module (by default)
// Modules - encapsulated codes (only share minimum)
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-export');
require('./mind-grenade');

console.log(data);

sayHi('Joel');
sayHi(names.john);
sayHi(names.peter);
