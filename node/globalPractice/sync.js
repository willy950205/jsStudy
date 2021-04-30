const fs = require('fs');

console.log('start');

let data = fs.readFileSync('./globalPractice/write.txt');
console.log('1번' ,data.toString());
data = fs.readFileSync('./globalPractice/write.txt');
console.log('2번' ,data.toString());
data = fs.readFileSync('./globalPractice/write.txt');
console.log('3번' ,data.toString());

console.log('end');