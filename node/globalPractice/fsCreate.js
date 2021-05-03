const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err){
        if(err.code === 'ENOENT'){
            console.log('폴더없음');
            fs.mkdir('./folder', (err) => {
                if(err){
                    throw err;
                }
                console.log(`폴더만들기 성공`);
                fs.open('./folder/file.js', 'w', (err,fd) => {
                    if(err){
                        throw err;
                    }
                    console.log(`빈 파일만들기 성공`, fd);
                    fs.rename('./folder/file.js','./folder/newFile.js', (err) => {
                        if(err){
                            throw err;
                        }0
                        console.log(`이름 바꾸기 성공`);
                    })
                });
            });
        }else{
            throw err;
        }
    }else{
        console.log(`이미 폴더있음`);
    }
});