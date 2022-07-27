import http from "http";

const server = http.createServer((req, res) => {
  
    console.info(req.method);
    console.info(req.url);
    console.info(req.statusCode);

    if(req.method === "POST"){
        req.addListener("data", (data) => {
            res.setHeader("Content-Type", "application/json");
            res.write(data);
            res.end()
        })
    }else{
        if(req.url === "/nanda"){
            res.write("Hello nanda");
        }else{
            res.write("Hello world");
        }
        res.end();
    }

    
    
});

server.listen(5000);