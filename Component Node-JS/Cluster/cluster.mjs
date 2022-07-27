import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if(cluster.isPrimary){
    // jalankan worker
    console.info(`primary : ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++){
        cluster.fork();
    }
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if(cluster.isWorker){
    console.info(`worker : ${process.pid}`);


const server = http.createServer((req, res) => {
    res.write(`Sedang merespon ${process.pid}\n`);
    res.write(`Sedang merespon ${process.pid}`);
    res.end();
    process.exit();
});

server.listen(5000);
}