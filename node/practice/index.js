const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddIrEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddIrEven('hello'));

console.log(global);

// process.versoin;console.log