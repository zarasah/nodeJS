// // 1.
// const hello = require('./hello.js');

// console.log(hello);  //  {}

// // 2.
// const hello = require('./hello.js');

// console.log(hello);  //  string 'I am from hello.js'

// // 3.

// const hello = require('./hello.js');

// hello.hi();

// 4. Path

const path = require('path');
const currentDir = path.resolve();
const filePath = path.join(currentDir, 'index.js');
const parsePath = path.parse(filePath);
const baseWithExt = path.basename(filePath);
const base = path.basename(filePath, '.js');

console.log('cuurrentDir', currentDir);
console.log('filePath', filePath);
console.log('parsePath', parsePath);
console.log('basename with extension', baseWithExt);
console.log('basename', base);

// 5. Console

console.assert('hi', 'Oops');  // nothing will be printed
console.assert(0, 'Oops');  //  Assertion failed: Oops

//console.clear();

console.count('first');  //  first: 1
console.count('first');  //  first: 2
console.count('first');  //  first: 3
console.count();  //  default: 1
console.count();  //  default: 2

console.countReset('first');
console.countReset();
console.count('first');  //  first: 1
console.count();  //  default: 1

console.debug(55, 'Age');  //  55 Age
console.debug("It's console.log");  //  It's console.log
console.debug(true);  //  true

const obj = {
    name: 'Zara',
    age: 32,
}

console.dir(obj, {colors: false});
console.log(obj);

const errorNum = 7;
console.error('Oops');
console.error('Error N%d', errorNum);

console.info('console.info() is an alias for console.log()');

console.table({0: 'a', 1: 'b', 2: 'c'});
console.table([{0: 'a', 1: 'b', 2: 'c'}, {0: 'A', 1: 'B', 2: 'C'}]);

console.time('start');
let i = 0;
while (i < 100000) {
    i++;
}
console.timeEnd('start');  //  27.883ms

console.trace('This is strange');

console.warn('something went wrong');

//  6.  Errors

const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack; // Similar to `new Error().stack`

const error = new Error('First error');

console.error(error.code);
console.error(error.message);
console.error(error.stack);

//  7.  OS

//  The os module provides operating system-related utility methods and properties.

const os = require('os');

console.log(os.EOL);
console.log(os.arch())
console.log(os.constants);
console.log(os.cpus());
console.log(os.devNull);
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());  //  C:\Users\User
console.log(os.hostname());  //  LAPTOP-RCCACLH8
console.log(os.platform()); // win32
console.log(os.type()); // Windows_NT
console.log(os.totalmem()); // 8379490304

//  8.  URL

const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);

const myURL1 = new URL('https://example.org');
myURL1.pathname = '/a/b/c';
myURL1.search = '?d=e';
myURL1.hash = '#fgh';

console.log(myURL1.href);

const newURL = new URL('https://example.org/foo/bar?baz#it');

console.log('newURL.hash', newURL.hash); //  #it
console.log('newURL.host', newURL.host); //  example.org
console.log('newURL.hostname', newURL.hostname); //  example.org
console.log('newURL.href', newURL.href); //  https://example.org/foo/bar?baz#it
console.log('newURL.origin', newURL.origin); //   https://example.org
console.log('newURL.pathname', newURL.pathname); //  /foo/bar
console.log('newURL.port', newURL.port); //  
console.log('newURL.protocol', newURL.protocol); //  https:
console.log('newURL.search', newURL.search); //  ?baz
console.log('newURL.searchParams', newURL.searchParams); //  URLSearchParams { 'baz' => '' }

const passURL = new URL('https://abc:xyz@example.com');

console.log('passURL.password', passURL.password); //  xyz

// 9. Utilities

const util = require('util');

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

// 10. File system

const fs = require('fs');
const fsPromises = require('fs/promises');

const jsPath = path.join(path.resolve(), 'package.json');
const jsFile = path.join(path.resolve(), 'file1.txt');

fs.accessSync(jsPath);
try {
  fs.accessSync(jsFile, fs.constants.W_OK);
} catch (error) {
  console.error(error)  //  no such file or directory
}

console.log(fs.accessSync(jsPath)) //  undefined

fs.appendFileSync('myFirstFile.txt', 'Synchronously append data to a file.')

console.log(fs.readFileSync(path.join(currentDir, 'myFirstFile.txt'), 'utf8'));

fsPromises.appendFile('file.txt','Hello File');

fs.stat('newDir', function(err) {
  if(err) {
    fsPromises.mkdir('newDir');
  }
  fsPromises.opendir('newDir').then((res) => console.log(res));
}); 

const stat = fs.statSync('myFirstFile.txt');
const statAsync = fsPromises.stat('file.txt');

statAsync.then((res) => console.log(res));
statAsync.then((res) => console.log(res.isFile()));

console.log('Size of myFirstFile.txt', stat.size);
console.log('myFirstFile.txt is directory', stat.isDirectory());

fsPromises.cp('myFirstFile.txt', 'copy.txt');

fsPromises.writeFile('b.txt', 'hell'); // create b.txt and add 'hell' text
fsPromises.appendFile('b.txt','o');  // add 'o' to 'hell' and result is 'hello'
fsPromises.writeFile('b.txt', 'this is end');  // delete all in b.txt and add 'this is end'

fsPromises.writeFile('delete.txt', ''); // create delete.txt
fsPromises.unlink('delete.txt');  // delete delete.txt
