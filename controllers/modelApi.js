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
    
    let settings = {
        channels : req.body.channels
    };

    let device = factory.createDevice(req.body.type, settings);

    storage.set(device.id, device);
    res.render('index.hbs', storage.getAll());
}

modelControllApi.turnOnDevice = (req, res) => {
    storage.items[req.params.id].turnOn();
    res.render('index.hbs', storage.getAll());
}
modelControllApi.turnOffDevice = (req, res) => {
    storage.items[req.params.id].turnOff();
    res.render('index.hbs', storage.getAll());
}

modelControllApi.nextChannel = (req, res) => {
    storage.items[req.params.id].nextChannel();
    res.render('index.hbs', storage.getAll());
} 
modelControllApi.previousChannel = (req, res) => {
    storage.items[req.params.id].previousChannel();
    res.render('index.hbs', storage.getAll());
} 

modelControllApi.update = (req, res) => {
    
    let device = req.body;
    if(device.state === 'false'){
        device.state = 'true';
        storage.items[device.id].turnOn()
    } else {
        device.state = 'false';
        storage.items[device.id].turnOff()
    }
    res.send(JSON.stringify(device));
} 

module.exports = modelControllApi;