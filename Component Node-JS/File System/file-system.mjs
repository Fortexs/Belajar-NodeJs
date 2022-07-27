import fs from "fs/promises";

const buffer = await fs.cp("file-system.mjs");

console.info(buffer.toString());

fs.writeFile("tempt.txt", "helloworld");