const os=require('os');
const user =os.userInfo();

console.log(user);

console.log(`The system is up for ${os.uptime()} seconds`);

const system={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}

console.log(system);