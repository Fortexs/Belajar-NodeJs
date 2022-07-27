import net from "net";

const server= net.createServer((client) => {
    console.info("Client terkoneksi");

    client.addListener("data", (data) => {
        console.info(`receive data${data.toString()}`);
        client.write(`Woi Kau ${data.toString()}\r\n`);
    })
});

server.listen(3000, "localhost");