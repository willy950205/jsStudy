const {checkSchema} = require('express-validator');

const test = checkSchema({
    id:{
      
      isLength : {
        options :{min : 3, max:10},
        errorMessage : "id는  3~10 글자입니다.",
      },
      matches: {
        options: [/^[a-zA-Z0-9]*$/],
        errorMessage: "특수문자는 안됨"
      },
  
    },
  
    password : {
      
      isLength : {
        options :{min : 3, max:10},
        errorMessage : "password는  5~20 글자입니다.",
      },
      matches: {
        options: [/^[a-zA-Z0-9~!@#$%^&*]*$/],
        errorMessage: "영문 또는 숫자 또는 특수문자 정규표현식 불일치"
      },   
  
    }, 
    email : {
      isEmail:{
        errorMessage : "email 형식이 아닙니다.",
        bail : true // 이전 유효성 검사 중 하나라도 실패하면 실행중인 유효성 검사를 중지합니다. 데이터베이스 또는 외부 API를 건 드리는 사용자 지정 유효성 검사기가 실패 할 경우 실행되는 것을 방지하는 데 유용합니다.
        // 여기서 만약 에러가 발생했다면, 다음 검사를 하지 않겠다는 뜻. 좀 더 빨리 에러를 확인할 수 있다.
      },
      isLength : {
        options :{min : 1},
        errorMessage : "이메일이 입력되지 않았습니다.",
      },
    },
    date : {  
      isDate  : {
        // yy-mm-dd 형식만 체크함
        errorMessage : "날짜형식이 아닙니다.",
        bail:true
      }
    },
    integer : {
      isNumeric:{
        errorMessage:"숫자가 아닙니다.",
        bail:true
      }
    },
    boolean : {
    
      custom:{
        
        options : value =>{
          if(value==='T' || value==='t' || value==='Y' ||value==='y'|| value=='true'||value=='TRUE'||value=='F' || value=='f' || value=='N' ||value=='n'|| value=='false'||value=='FALSE'){
            console.log("let's get it~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!!!!")
            return true;
          }
        }
      },

      // isBoolean:{
      //   bail:true,
      //   errorMessage:"boolean이 아닌데요?"
      // }
      
  
    },
  
  })

module.exports=test;