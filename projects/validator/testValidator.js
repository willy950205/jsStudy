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
        bail : true
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
    
      isBoolean:{
        bail:true,
        errorMessage:"boolean이 아닌데요?"
      }
  
    },
  
  })

module.exports=test;