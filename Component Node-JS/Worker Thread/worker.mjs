import {parentPort, threadId} from "worker_threads";

parentPort.addListener("message", (message) => {
    for (let i = 0; i < message; i++) {
        console.info(`Thread ke ${threadId} message ke ${i}`);
        parentPort.postMessage(i);
    }
    parentPort.close();
})