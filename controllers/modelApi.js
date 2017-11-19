const router = require('../router');
const storage = require('../models');
const factory = require('../models/Factory');

const modelControllApi = {};

modelControllApi.getAll = (req, res) => {
    res.render('index.hbs', storage.getAll());
};

modelControllApi.get = (req, res) => {
    let device = storage.get(req.params.id);
    res.render('index.hbs', device);
};

modelControllApi.delete = (req, res) => {
    if (storage.items[req.params.id]) {
        storage.remove(req.params.id);
    } else {
        res.status(404);
        res.end();
    };
}

modelControllApi.create = (req, res) => {
    let device = factory.createDevice(req.body.type, req.body.settings);
    storage.set(device.id, device);
    res.render('index.hbs', storage.getAll());
}

modelControllApi.turnOnDevice = (req, res) => {
    storage.items[req.params.id].turnOn();
    res.render('index.hbs', storage.getAll());
}
modelControllApi.turnOffDevice = (id) => storage.items[id].turnOff();

modelControllApi.nextChannel = (id) => storage.items[id].nextChannel(); 

module.exports = modelControllApi;