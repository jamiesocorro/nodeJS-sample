// module wrapped (function(exports, require, module, __filename, __dirname))

// event 
const EventEmitter = require('events');

console.log(__filename);

class Logger extends EventEmitter {

    log(message) {
        console.log(message);

        // signal
        this.emit('logged', { id: 1, url: 'http://test.com' });
    }

}

module.exports = Logger;