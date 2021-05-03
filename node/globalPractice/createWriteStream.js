const fs = require('fs');

const writeStream = fs.createWriteStream('./globalPractice/writeItem2.txt');

writeStream.on('finish', () =>{
    console.log('파일쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();

