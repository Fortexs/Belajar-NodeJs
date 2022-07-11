import dns from "dns/promises";

const address = await dns.getServers("www.programmerzamannow.com");
console.info(address.address);
console.info(address.family);