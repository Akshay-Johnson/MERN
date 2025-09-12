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

