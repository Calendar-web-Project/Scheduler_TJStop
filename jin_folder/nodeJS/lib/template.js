module.exports = {
    html : function (title, list, body, control){
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
        ${control}
        ${body}
      </body>
      </html>
      `;
    },
    list : function templatelist(filelist){
      var list = '<ul>';
      for(var i=0;i<filelist.length;i++){
        list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      }
      list += '</ul>';
      return list;
    }
}