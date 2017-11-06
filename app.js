const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

let DeviceStorage = new Storage();


const myTV = createDevice('TV', {});

DeviceStorage.set(myTV.id, myTV);
console.log(DeviceStorage.get(myTV.id));