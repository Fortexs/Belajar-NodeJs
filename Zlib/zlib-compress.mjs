import zlib from "zlib";
import fs from "fs";

const sumber = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(sumber);

fs.writeFileSync("zlib-compress.mjs.txt", result);