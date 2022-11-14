import {sayHelloAsync} from '../src/asyncronus.js';
test.concurrent("concurent 1", async()=>{
    await expect(sayHelloAsync("Nanda")).resolves.toBe("Hello Nanda");
});
test.concurrent("concurent 2", async()=>{
    await expect(sayHelloAsync("Nanda")).resolves.toBe("Hello Nanda");
});
test.concurrent("concurent 3", async()=>{
    await expect(sayHelloAsync("Nanda")).resolves.toBe("Hello Nanda");
});
test.concurrent("concurent 4", async()=>{
    await expect(sayHelloAsync("Nanda")).resolves.toBe("Hello Nanda");
});
