// http:- it handles request and response of server.HTTP stands for HyperText Transfer Protocol.
const http=require('http');
http.createServer((req,res)=>{
    res.write("<h1> This is my first small api and it run successfully.I added nodemon.</h1>")
    res.end();
}).listen(5000)
