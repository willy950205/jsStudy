const crypto = require('crypto');
const iv = Buffer.alloc(16,0);
const password = '열쇠';
const key = crypto.scryptSync(password, 'salt', 24);
const algorithm = 'aes-256-ccm';



const cipher = crypto.createCipheriv(algorithm, key,iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화  :  ', result);

// const decipher = crypto.createDecipheriv(algorithm, key,iv);
// let result2 = decipher.update(result, 'base64', utf8);
// result2 += decipher.final('utf8');
// console.log('복호화  :  ',result2);