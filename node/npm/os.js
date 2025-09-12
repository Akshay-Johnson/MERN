//os module
const os = require('os');

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log("cpu info:", os.cpus());

console.log('total memory:', os.totalmem());
console.log('free memory:', os.freemem());

console.log('home directory:', os.homedir());
console.log('hostname:', os.hostname());
console.log('system uptime:', os.uptime(), 'seconds');

console.log('network interfaces:', os.networkInterfaces());

console.log('temp directory:', os.tmpdir());


console.log('os release:', os.release());