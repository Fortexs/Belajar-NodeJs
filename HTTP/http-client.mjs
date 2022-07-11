import https from "https";

const endpoint = "https://requestinspector.com/inspect/01g725y1qeakvjsp5ct86dfbwa";
const request = https.request(endpoint, {
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data: ${data.toString()}`);

    })
});

const kontol = JSON.stringify({
    depan: "Nanda",
    tengah: "anak",
    belakang: "dazal",
})

request.write(kontol);
request.end();