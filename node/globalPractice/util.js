const  util = require('util');
const crypto = require('crypto');

const donUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'donUseMe 함수는 deprecated되었으니 더이상 사용하지 마세요');
donUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64).then((buf) => {
    console.log(buf.toString('base64'));
}).catch((error) => {
    console.log(error);
});