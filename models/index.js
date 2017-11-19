const factory = require('./Factory');
const Storage = require('./Storage');

const DeviceStorage = new Storage();

let myTV = factory.createDevice('TV', {channels : ['music', 'news', 'documentary']});
let myTV2 = factory.createDevice('TV', {channels : ['music', 'news', 'documentary']});
DeviceStorage.set(myTV.id, myTV);
DeviceStorage.set(myTV2.id, myTV2);

module.exports = DeviceStorage;