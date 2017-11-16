const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

const DeviceStorage = new Storage();

let myTV = createDevice('TV', {channels : ['music', 'news', 'documentary']});
let myTV2 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV3 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV4 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV5 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV6 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV7 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV8 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV9 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV10 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV11 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});
let myTV12 = createDevice('TV', {channels : ['music', 'porn', 'documentary']});

DeviceStorage.set(myTV.id, myTV);
DeviceStorage.set(myTV2.id, myTV2);
DeviceStorage.set(myTV3.id, myTV3);
DeviceStorage.set(myTV4.id, myTV4);
DeviceStorage.set(myTV5.id, myTV5);
DeviceStorage.set(myTV6.id, myTV6);
DeviceStorage.set(myTV7.id, myTV7);
DeviceStorage.set(myTV8.id, myTV8);
DeviceStorage.set(myTV9.id, myTV9);
DeviceStorage.set(myTV10.id, myTV10);
DeviceStorage.set(myTV11.id, myTV11);
DeviceStorage.set(myTV12.id, myTV12);


module.exports = DeviceStorage;