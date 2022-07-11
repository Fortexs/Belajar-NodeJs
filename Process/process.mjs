import process from "process";

process.addListener("exitt", (exitCode)=> {
    console.oinfo(`Berhasil ${exitCode}`);
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);

process.exit(1);
console.log("data");
