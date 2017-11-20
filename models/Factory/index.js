const devices = require('../Devices/devices');

const factoryApi = {};

factoryApi.availableDevices = () => {

    let allDevices = [];
    for (type in devices) {
        allDevices.push(type);
    }
    return allDevices;
}

factoryApi.createDevice = (type, settings = {}) => {
    
    if (!devices[type]) {
        throw new Error('No such device');
    }
    
    return new devices[type](settings);
    
}

module.exports = factoryApi;