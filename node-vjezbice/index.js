import http from 'http'
import fs from "fs"
const server = http.createServer(function(req,res){
    console.log(req.url);
    let url = req.url.slice(1)
    console.log(url+".html");

    switch(req.url){
        case "/":          
            res.writeHead(200,"content-type:text/html")
            fs.createReadStream('index.html').pipe(res)
            break;
        case req.url:
            res.writeHead(200,"content-type:text/html")
            fs.createReadStream(url+".html").pipe(res)
            break;
    }
})

const port = 5000;
const host = "localhost"



server.listen(port,host,()=>{
    console.log(`Running on http://${host}:${port}`);
})
