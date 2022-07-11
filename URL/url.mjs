import {URL} from "url";

const pzn = new URL("https://www.udemy.com/course/nodejs-pemula-sampai-mahir/learn/lecture/30053932#questions");

pzn.host = "www.nanda.com";
pzn.searchParams.append("status", "basic");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);