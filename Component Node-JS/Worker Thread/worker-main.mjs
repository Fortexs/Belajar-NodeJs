import {threadId, Worker} from "worker_threads";

const pertama = new Worker("./worker.mjs");
const kedua = new Worker("./worker.mjs");
const ketiga = new Worker("./worker.mjs");

pertama.addListener("message", (message) => {
    console.info(`Thread ke ${threadId} receive dari pertama : ${message}`);
});
kedua.addListener("message", (message) => {
    console.info(`Thread ke ${threadId} receive dari kedua : ${message}`);
});
ketiga.addListener("message", (message) => {
    console.info(`Thread ke ${threadId} receive dari ketiga : ${message}`);
});

pertama.postMessage(1);
kedua.postMessage(1);
ketiga.postMessage(1);