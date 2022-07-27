import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Nanda\n");
writer.write("Ikhwanul\n");
writer.write("Nadlirin\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
})