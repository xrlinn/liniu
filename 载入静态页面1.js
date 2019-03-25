const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
http.createServer((req,res)=>{
    switch(req.url){
        case "/":
        case "/index":
            var pathname = path.join(__dirname,"liniu.html")
            fs.readFile(pathname,{"encoding":"utf-8"},(err,data)=>{
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                    res.write(data);
                    res.end()
                }
            })
            break;
        default:
            var pathname = path.join(__dirname,req.url);
            if(fs.existsSync(pathname) && fs.statSync(pathname).isFile()){
                fs.readFile(pathname,(err,data)=>{
                    if (err){
                        console.log(err)
                    }else{
                        res.writeHead(200,{"content-type":mime.getType(pathname)})
                        res.write(data)
                        res.end()
                    }
                })
            }
            break;
    }

}).listen(3000)