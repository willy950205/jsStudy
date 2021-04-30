const fs = require('fs');

fs.writeFile('./globalPractice/write.txt', '글이 입력됩니다.', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('./globalPractice/write.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
})