import fs from "fs";

export const membacaFile = (req, res) => {
    fs.writeFileSync(req, res);
}

console.log("Hello World!");