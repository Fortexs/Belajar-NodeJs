import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file,
    ignoreErrors: file,
})

const keluarga = {
    nama: "nanda",
    belakang: "ikhwanul", 
}

log.info("Hello World");
log.error("Kontol");
log.table(keluarga);
log.clear(keluarga);
