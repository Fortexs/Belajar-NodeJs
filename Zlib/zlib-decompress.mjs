import zlib from "zlib";
import fs from "fs";

const sumber = fs.readFileSync("zlib-compress.mjs.txt");
console.info(sumber.toString());

const result = zlib.unzipSync(sumber);
console.info(result.toString());