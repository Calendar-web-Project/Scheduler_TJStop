var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB2</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templatelist(filelist){
  var list = '<ul>';
  for(var i=0;i<filelist.length;i++){
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
  }
  list += '</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    
    if(pathname === '/'){
      if(title === undefined){

        fs.readdir('./data', function(err, filelist){
          title = 'Welcome';
          var description = 'Hello, Node.js';

          var list = templatelist(filelist);

          var template = templateHTML(title, list,`<h2>${title}</h2>${description}`);
          response.writeHead(200); // 파일을 성공적으로 전달
          response.end(template);
        })

        
      }
      else{
        fs.readdir('./data', function(err, filelist){
          title = queryData.id;

          fs.readFile(`data/${title}`,'utf8', function (err,description){
            var list = templatelist(filelist);
            var template =templateHTML(title, list,`<h2>${title}</h2>${description}`);
            
            response.writeHead(200); // 파일을 성공적으로 전달
            response.end(template);
          });
        });
      }

      
    }
    else{
      response.writeHead(404);// 파일을 전달을 실패
      response.end("Not found");
    }

    

    

    
 
});
app.listen(3000);