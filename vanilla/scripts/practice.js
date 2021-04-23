const dnB = document.getElementById('htmldB');
var dnnB = document.querySelector('#htmlnB');
//const dnnB = document.getElementById('htmlnB');
const body = document.querySelector('body');
const wholeTetxt = document.querySelector('p');

let checker = 'day';
console.log(checker);
function dayChanger(){
    if(checker==='day'){
        wholeTetxt.style.color='black';
        title.style.color='black';
        body.style.backgroundColor='white';
    }else if(checker==='night'){
        wholeTetxt.style.color='white';
        title.style.color='white';
        body.style.backgroundColor='black';
    }
}
dayChanger();

dnnB.value

// day button
dnB.onclick = function(){
    checker = 'day';
    dayChanger();
    console.log(checker);
}
// night button
dnnB.onclick = function(){
    checker = 'night';
    dayChanger();
    console.log(checker);
}

