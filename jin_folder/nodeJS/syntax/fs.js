var fs = require('fs');

var text = fs.readFileSync('text.txt','utf-8');// 동기적

fs.readFile('text.txt','utf-8', function(err,data){//비동기적
    console.log(data);
})