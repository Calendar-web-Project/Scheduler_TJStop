var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body, control){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${control}
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

          var template = templateHTML(title, list,
            `<h2>${title}</h2>${description}`, 
            `<a href="/create"> create </a>`
            );
          response.writeHead(200); // 파일을 성공적으로 전달
          response.end(template);
        })

        
      }
      else{
        fs.readdir('./data', function(err, filelist){
          title = queryData.id;

          fs.readFile(`data/${title}`,'utf8', function (err,description){
            var list = templatelist(filelist);
            var template =templateHTML(title, list,
              `<h2>${title}</h2>${description}`,
              `<a href="/create"> create </a> <a href="/update?id=${title}"> update </a>`
              );
            
            response.writeHead(200); // 파일을 성공적으로 전달
            response.end(template);
          });
        });
      }

      
    }
    else if(pathname === "/create"){
      fs.readdir('./data', function(err, filelist){
        title = 'WEB - create';
        var description = 'Hello, Node.js';

        var list = templatelist(filelist);

        var template = templateHTML(title, list,
          `
          <form action= "http://localhost:3000/create_process" method="post">
            <p><input type = "text" name = "title" placeholder = "title"></p>
            <p>
              <textarea name = "description" placeholder = "description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `, ``
        );
        response.writeHead(200); // 파일을 성공적으로 전달
        response.end(template);
      });
    }
    else if(pathname === "/create_process"){
      var body ="";
      request.on("data", function(data) {
        body+=data;
      });
      request.on("end", function() {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end('success');
        })
      }); 
    }
    else{
      response.writeHead(404);// 파일을 전달을 실패
      response.end("Not found");
    }

    

    

    
 
});
app.listen(3000);