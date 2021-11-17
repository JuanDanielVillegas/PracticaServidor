// Servidor flat

//modulo = libreria en node js
const http = require('http');
// file system
const fs = require('fs');

// HTTP => (request, response)

http.createServer((request, response)=>{
    // 1. Código de estatus HTTP y 2. Content Type
    const file = request.url == '/' ? "./WWW/index.html" : `./WWW${request.url}`;
    
    fs.readFile(file, (err, data)=>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/plain"});
            response.write("Not Found");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"text/html"});
            response.write(data);
            response.end();
        }
    });

}).listen(4444);
// Definiir por qué puerto contestará
// 80 => HTTP 443 => HTTPS, uso específico


