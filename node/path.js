const path = require('path');

const filtpath = path.join('folder', 'subfolder', 'file.txt');
console.log('joined path:', filtpath);

const absoluePath = path.resolve('folder','file.txt');
console.log('absolute path:', absoluePath);

console.log('base name:' , path.basename('user/aksha/file.txt'));

console.log('directory name:', path.dirname('user/aksha/file.txt'));

console.log('file extension:', path.extname('user/aksha/file.txt'));

const parsed = path.parse('user/aksha/file.txt');

const formatted = path.format(parsed);
console.log('formatted path:',formatted);

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

//fs module
console.log('os release:', os.release());