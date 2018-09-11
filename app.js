// main module

// test the node module
console.log(module); 

// use built in module

// directory
const path = require('path');
let pathObj = path.parse(__filename);

console.log(pathObj);

// operating system
const os = require('os');
let totalMemory = os.totalmem();

console.log(`Total Memory: ${totalMemory}`);

// file system
const fs = require('fs');
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Files', files);
});

// event 
const EventEmitter = require('events');

const Logger = require('./logger');
const loggers = new Logger();

// add a listener 
loggers.on('logged', (arg) => {
    console.log('called', arg);
});

loggers.log('log it');


