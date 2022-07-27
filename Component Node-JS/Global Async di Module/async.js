function samplePromise(){
    return Promise.resolve("404");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}
run();