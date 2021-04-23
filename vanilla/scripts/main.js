let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert('hihihihihihi');

function testfunction(a ,b){
    alert(a+b);
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/783px-Test-Logo.svg.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}