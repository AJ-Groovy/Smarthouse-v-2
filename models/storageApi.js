const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

const deviceStorageApi = {};


let DeviceStorage = new Storage();


// const myTV = createDevice('TV', {channels : ['Music', 'News'] });
// const myTV2 = createDevice('TV', {channels : ['Music', 'News', 'Documentary'] });

// DeviceStorage.set(myTV.id, myTV);
// DeviceStorage.set(myTV2.id, myTV2);


deviceStorageApi.getAll = (req, res) => {
    res.json(DeviceStorage.getAll());
};

deviceStorageApi.get = (id) => DeviceStorage.get(id);

deviceStorageApi.delete = (req, res) => {

    if(DeviceStorage.items[req.params.id]){
        DeviceStorage.remove(req.params.id);
    } else {

        res.status(404);
        res.end();
    };
}

module.exports = deviceStorageApi;