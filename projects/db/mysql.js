const mysql = require('mysql');
const dotenv = require('dotenv');

module.exports = function(){
  return {
    init : function(){
      return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'thing9000',
        database : 'mydb'
      });
    },

    open : function(con){
      con.connect(function(err){
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    },

  }
}


// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
// const connection = 
  
// connection.connect();


// function getAllFromTipic(callback){
//   connection.query('SELECT * FROM topic', function (error, results, fields) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(results);

//     callback(results);
// });
// }
  

  
//connection.end();



