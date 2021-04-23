const title = document.querySelector('#titleee');
const title2 = document.getElementById('titleee2');
// title.style.color="white";


const CLICKED_CLASS = "clicked";



function  handleClicked(){
    // wonderful function 이게 그 클래스에 있으면 없애고 있으면 추가해줌
    title.classList.toggle(CLICKED_CLASS);

}

function init(){

    title.addEventListener("click", handleClicked);

}

init();