const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

const DeviceStorage = new Storage();

let myTV = createDevice('TV', {channels : ['music', 'news', 'documentary']});
let myTV2 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});

DeviceStorage.set(myTV.id, myTV);
DeviceStorage.set(myTV2.id, myTV2);


module.exports = DeviceStorage;