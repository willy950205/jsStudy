var express = require('express');
var router = express.Router();
const mysql = require('../db/mysql')();
const connection = mysql.init();
mysql.open(connection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', (req,res,next) => {
  const sql = `SELECT * FROM topic WHERE ID = ?`;

  console.log(req.body.id);
  // console.log(req.body.pass);
  // res.json({id : req.body.id, pass : req.body.pass});
  
  connection.query(sql,[req.body.id ],(error, rows, field) => {
    if(error){
      console.log(error);
    }
    
    console.log(rows);
    res.json(rows);
  });

    
  // next();
});

router.post('/test', (req,res,next) => {
  const sql = `INSERT INTO TOPIC(TITLE, DESCRIPTION, AUTHOR_ID) VALUES ('THE_QUEITT', 'THE KING', 45)`;
  connection.query(sql, (error, result, field) => {
    if(error){
      console.error(error);
    }else{
      console.log(result);
    }

  });
   next();
});

router.post('/test2', (req,res,next) => {
  const sql = `INSERT INTO TOPIC(TITLE, DESCRIPTION, AUTHOR_ID) VALUES (?, ?, ?)`;
  const title = req.body.title;
  const description = req.body.description;
  const auther = parseInt(req.body.author_id);

  connection.query(sql, [title,description,auther],(error, result, field) => {
    if(error){
      console.error(error);
    }else{
      console.log(result);
      res.json(result);
    }

  });
  //  next();
});

router.post('/test3', (req,res,next) => {
  const sql = `UPDATE TOPIC SET DESCRIPTION = ? WHERE ID = ?`;
  const description = req.body.des;
  const id = req.body.id;
  const  array = [description, id];

  connection.query(sql, array, (error, result, field) => {
    if(error){
      console.error(error);
    }else{
      console.log(result);
      console.log('succes');
    }
  });

  next();

});


router.post('/test4', (req,res,next) => {
  const sql= `DELETE FROM TOPIC WHERE AUTHOR_ID = ? `;
  const author_id = parseInt(req.body.author) ;
  connection.query(sql, author_id, (error, result, field) => {
    if(error){
      console.error(error);
    }else{
      res.json(result);
      console.log(result);
      console.log('succes');
    }
  });
  // next();
});

router.get('/test5', (req,res,next) => {
  const sql= `SELECT T.ID 아이디 ,T.TITLE 제목, A.NAME 저자 FROM TOPIC T INNER JOIN AUTHOR A WHERE T.AUTHOR_ID = A.ID ORDER BY T.ID`;
  const author_id = parseInt(req.body.author) ;
  connection.query(sql, (error, result, field) => {
    if(error){
      console.error(error);
    }else{
      res.json(result);
      console.log(result);
      console.log('succes');
    }
  });
  // next();
});

module.exports = router;
