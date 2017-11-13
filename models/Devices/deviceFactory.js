const devices = require('./devices');

module.exports = function createDevice(type, settings = {}) {

    if (!devices[type]) {
        throw new Error('No such device');
    }

    return new devices[type](settings);

}