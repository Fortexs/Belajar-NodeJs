import timers from "timers/promises";

//Ini pengulangan yang sekalijalan/langsung berhenti
// console.info(new Date());
// const name = await timers.setTimeout(5000, "Nanda IKhwaul Nadlirin");
// console.info(new Date());

// console.log(name);

//Pengulangan yang unlimited tanpa mengubah apapun
// for await (const startTime of timers.setInterval(1000, new Date())){
//     console.info(`Ini dimulai pukul ${startTime}`);
// }

// pengulangan yang unlimited dan mengubah apapun
// for await (const startTime of timers.setInterval(1000, "Nanda")){
//     console.info(`Ini dimulai pukul ${new Date()}`);
// }

for await  (const startTime of timers.setImmediate(1000, "Nanda")){
    console.info(`ini dimulai sejak ${new Date()}`);
}