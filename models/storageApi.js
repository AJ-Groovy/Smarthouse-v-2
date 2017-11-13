const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

let DeviceStorage = new Storage();


const myTV = createDevice('TV', {channels : ['Music', 'News'] });
const myTV2 = createDevice('TV', {channels : ['Music', 'News', 'Documentary'] });

DeviceStorage.set(myTV.id, myTV);
DeviceStorage.set(myTV2.id, myTV2);
// let a = DeviceStorage.get(myTV2.id);


const deviceStorageApi = {};

deviceStorageApi.getAll = (req, res) => {
    res.json(DeviceStorage.getAll());
};

deviceStorageApi.get = (id) => DeviceStorage.get(id);

module.exports = deviceStorageApi;