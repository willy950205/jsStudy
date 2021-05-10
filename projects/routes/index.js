const { json } = require('express');
var express = require('express');
const {body, validationResult} = require('express-validator');
var router = express.Router();
const db = require('../db/mysql')();
const connection = db.init();
db.open(connection);

const test = require('../validator/testValidator');



/* GET home page. */
// id, password, email, date, integer, boolean ==> check 

router.get('/adf', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    status:'succes',
    data : {a:'adf'}
  })
  // res.json()
  
});

// sanitization 방식
// /id로 post 요청이 들어왔을 때
router.post('/id', [
  // body에 전달되는 값 중 id 값이 존재하는지, 길이가 최소 5글자인지, 최대 16글자인지 확인합니다.
  body('id', 'id가 입력이 안됨').not().isEmpty(),
  body('id').isLength({min : 5, max : 16}).withMessage('아이디는 5~16글자임'),
  // body에 전달되는 값 중 password 값이 존재하는지 길이가 최소 5글자인지, 최대 16글자인지 확인합니다. 영문 숫자 특수문자 체크하기
  body('password', 'password 없음').not().isEmpty(),
  body('password').isLength({min : 6, max : 20}).withMessage(`비번은 6~10글자임`),
  body('password').matches(/^[a-zA-Z0-9~!@#$%^&*]*$/).withMessage('영문 또는 숫자 또는 특수문자 정규표현식 불일치'),
  
  // body에 전달되는 값 중 email 값이 존재하는지 이메일 형식이 맞는지 확인.
  body('email', 'email 입력이 필요합니다.').not().isEmpty(),
  body('email').isEmail().withMessage('이메일 형식이 아닙니다.'),
  // body에 전달되는 값 중 date 값이 존재하는지 date 형식이 맞는지 확인.
  body('date', 'date가 없음').not().isEmpty(),
  body('date').isDate().withMessage('날짜 형식이 아님'),
  // body에 전달되는 값 중 integer 값이 존재하는지 숫자 형식이 맞는지 확인.
  // integer 형식으로 가져오기 실패 => json 형식은 전부 String 형식으로 데이터가 들어오기 때문임 그렇다면 integer 형식으로 바꿔서 들어와야 하는데 how???
  body('integer', '숫자입력 안됨').not().isEmpty(),
  body('integer').isNumeric().withMessage('숫자가 아님'),
  // body에 전달되는 값 중 boolean 값이 존재하는지 boolean 형식이 맞는지 확인.=> true 와 false, 1과 0 은 구분함 but t?? y??는 구분 실패(이게 뭔지 나도 모르겠음 검색) 대소문자
  // body('boolean').custom(value => {
  //   if(value==='T'){
  //     return true;
  //   }
    
  // }).withMessage('이건 도대체 뭐야'),
  body('boolean', 'boolean 없음').not().isEmpty(),
  body('boolean','boolean 아님').custom(value => {
    if(value==='T' || value==='t' || value==='Y' ||value==='y'|| value=='true'||value=='TRUE'||value=='F' || value=='f' || value=='N' ||value=='n'|| value=='false'||value=='FALSE'){
      console.log("check check mic check");
      return true;
    }
  }),

], (req, res, next) => {
  console.log('hi i am here');
  // 상단 validation 코드의 결과값을 받아서 변수 errors에 담는다.
  const errors = validationResult(req);
  // errors 객체에 반환값이 없으면 에러코드를 return 한다.
  if (!errors.isEmpty()) {
    console.log(`it's a fucking error`);
    return res.status(400).json({ errors: errors.array() });
  }
  // 그렇지 않다면 해당 로그를 출력한다.
  console.log('Success');
  // 다음 라우터로 넘어가라

  // console.log(req.body);
  // const id = req.body.id;
  // const password = req.body.password;
  // const email = req.body.email;
  // const date = req.body.date;
  // const integer = parseInt(req.body.integer);

  const {id,password,email,date,integer} = req.body;

  let boolean = null;
  if(req.body.boolean==='T' || req.body.boolean==='t' || req.body.boolean==='Y' ||req.body.boolean==='y'|| req.body.boolean=='true'||req.body.boolean=='TRUE'){
    boolean = true;
  }else if(req.body.boolean=='F' || req.body.boolean=='f' || req.body.boolean=='N' ||req.body.boolean=='n'|| req.body.boolean=='false'||req.body.boolean=='FALSE'){
    boolean = false; 
  }
  //const boolean = req.body.boolean;

  console.log(id,'\n',password,'\n',email,'\n',date,'\n',integer,'\n',boolean);

  res.json(req.body);

  // next();
}
);

router.post('/id/check', test ,(req, res, next) => {
  console.log('hi i am here');
  // 상단 validation 코드의 결과값을 받아서 변수 errors에 담는다.
  const errors = validationResult(req);
  // errors 객체에 반환값이 없으면 에러코드를 return 한다.
  if (!errors.isEmpty()) {
    console.log(`it's a fucking error`);
    return res.status(400).json({ errors: errors.array() });
  }
  // 그렇지 않다면 해당 로그를 출력한다.
  console.log('Success');
  // 다음 라우터로 넘어가라
  next();
});

router.post('/receive',  (req, res, next) => {
  console.log('hi i am here');
  
  console.log(req.body);
  next();
});

router.get('/test', (req,res,next) => {
  const sql = `SELECT * FROM topic`;
  
  connection.query(sql, (error, rows, field) => {
    if(error){
      console.log(error);
    }
    
    console.log(rows);
    res.json(rows);
  });
  
  // next();
});

router.get('/test2', (req,res,next) => {
  db.getAllFromTopic();
  next();
});

module.exports = router;

