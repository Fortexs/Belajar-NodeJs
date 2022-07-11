import util from "util";

const firstName = "Nanda";
const lastName = "Ikhwanul";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const keluarga = {
    depan: "Nanda",
    belakang: "Ikhwanul"
};

// Default
console.info(`keluarga : ${JSON.stringify(keluarga)}`);

// Node JS
console.info(util.format("keluarga : %j", keluarga));