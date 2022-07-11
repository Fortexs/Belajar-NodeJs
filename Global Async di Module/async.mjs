function samplePromise(){
    return Promise.resolve("404");
}

const Name = await samplePromise();
    console.info(Name);