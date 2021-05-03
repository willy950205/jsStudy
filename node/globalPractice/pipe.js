const fs = require('fs');

const readStream = fs.createReadStream('./globalPractice/readme4.txt');
const writeStream = fs.createWriteStream('./globalPractice/writeiteme3.txt');

readStream.pipe(writeStream);