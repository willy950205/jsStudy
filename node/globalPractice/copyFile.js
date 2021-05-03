const fs = require(`fs`);

fs.copyFile(`./globalPractice/readme4.txt`, `./globalPractice/writeme4.txt`, (err)=>{
    if(err){
        return console.error(err);
    }
    console.log(`복사 완료`);
})