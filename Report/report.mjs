import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "isiError.json";

function sampleError(){
    throw new Error("ini error ya !");
}

sampleError();