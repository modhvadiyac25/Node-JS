const os = require("os");
const user = os.userInfo();
console.log(user);

console.log(`The system uptime ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    releas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);