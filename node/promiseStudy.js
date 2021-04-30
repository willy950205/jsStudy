// 프로미스의 3가지 상태(states)
// 프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)입니다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미합니다. new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖습니다.

// Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
// Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
// Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

const condition = true;

// const promise = new Promise((resolve, reject ) => {
// 	if(condition){
//     	resolve('성공');
//     }else{
// 		reject('실패');
// 	}
// });

// promise.then((message) => {
//     return new Promise((resolve, reject) => {
//         console.log(message);
//         resolve(message);
//     });
// }).then((message2) => {
//     console.log('message2');
//     return new Promise((resolve, reject) => {
//         resolve(message2);
//     });
// }).then((message3) => {
//     console.log('message3');
    
// }).catch((error) => {
//     console.log(error);
// });


function getData (){
    // 대기상태
    return new Promise((resolve, reject) => {
        
        // 이 줄은 값을 가지고오는 코드가 와야함
        const data = 100;
        const check = true;
        // 이행 성공 상태
        if(check){
            resolve(data);
        // 이행 실패상태    
        }else{
            reject(new Error("Request is failed"));
        }
        
    });
}

// 이행이 완료되면 값을 받는 상태
getData().then((resolveData) => {
    console.log(resolveData);
}).catch((err) => {
    console.log(err);
});

new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(1);
    }, 2000);
  })
  .then(function(result) {
    console.log(result); // 1
    return result + 10;
  })
  .then(function(result) {
    console.log(result); // 11
    return result + 20;
  })
  .then(function(result) {
    console.log(result); // 31
  });