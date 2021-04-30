const clockContaioner  = document.querySelector(".js-clock"),
      clockTitle = clockContaioner.querySelector("h1");

function getTime(){
     const date = new Date();
     const minutes = date.getMinutes();
     const hours = date.getHours();
     const senconds = date.getSeconds();
     // ${seconds}가 9이하이면 `0${senconds}` 이렇게 하고 아니면 senconds 이렇게 하는 람다식
     clockTitle.innerText = `${
          hours <=9 ? `0${hours}` : hours
     
     }:${
          minutes <= 9 ? `0${minutes}` : minutes
     }:${
          senconds <=9 ? `0${senconds}`:senconds
     }`;
}


function init() {
     
     setInterval(getTime, 1000);
}

init();