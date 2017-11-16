const router = require('../router');
const storage = require('../models');
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

modelControllApi.turnOnDevice = (id) => storage.items[id].turnOn();
modelControllApi.turnOffDevice = (id) => storage.items[id].turnOff();

module.exports = modelControllApi;