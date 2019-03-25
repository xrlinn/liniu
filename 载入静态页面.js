// const http = require("http");
// const fs = require("fs");
// http.createServer((req,res)=>{
//     // console.log(req.url);
//     var dir = __dirname + req.url;
//     console.log(dir);
//     switch(req.url){
//         case "/":
//         case "/index.html":
//            var data = fs.readFileSync("nodejs/index.html");
//            res.statusCode = 200;
//            res.write(data);
//            res.end();
//            break;
//         default:
//         if(fs.existsSync(dir) && fs.statSync(dir).isFile()){
//               fs.readFile(dir,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.statusCode = 200;
//                     res.write(data);
//                     res.end();
//                 }
//             });
//         }else{

//         }
//     }
// }).listen(3000);



// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const mime = require("mime");
// http.createServer((req,res)=>{
//     var pathName =  req.url;
//     console.log(pathName)
//     if(pathName == '/'){
//         pathName = 'liniu.html'; 
//     }
//     var extname = path.extname(pathName);
//         fs.readFile(path.join(__dirname,pathName),{"encoding":"utf-8"},function(err,data){
//             if(err){  /*没有这个文件*/
//                 console.log(err);
//             }else{ /*返回这个文件*/
//                 res.writeHead(200,{"Content-Type":mime.getType(extname),"charset":"utf-8"});
//                 res.write(data);
//                 res.end(); /*结束响应*/
//             }
//         })
//     }

// ).listen(3000)

// exports.getMime=function(extname){  

//     switch (extname){

//         case '.html':

//             return 'text/html';
//         case '.css':

//             return 'text/css';

//         case '.js':

//             return 'text/javascript';

//         default:
//             return 'text/html';
//     }

// }


const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
var port = 3000;
http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case "/":
        case "/index":
           var file = path.join(__dirname,"liniu.html");
           fs.readFile(file,{"encoding":"utf-8"},(err,data)=>{
               if(err){
                   console.log(err);
               }else{
                   res.write(data);
                   res.end();
               };
           })
           break;
        default:
        var file = path.join(__dirname,req.url);
         if (fs.existsSync(file) && fs.statSync(file).isFile()){
            fs.readFile(file,(err,data)=>{
                if (err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":mime.getType(file)})
                    res.write(data);
                    res.end()
                }

            })
        }
          break;
    }
}).listen(port,()=>{
    console.log(`服务器已经在${port}端口运行起来了`)
})