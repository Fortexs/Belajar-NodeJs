import process from "process";
import readLine from "readline";

const input = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("siapa anda ?", (name)=> {
    console.info(`halo ${name}`);
    input.close();
})