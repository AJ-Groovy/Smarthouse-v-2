const express = require('express');
const hbs = require('hbs');

const deviceStorageApi = require('../models/storageApi');

const router = new express();

router.set('view engine', 'hbs');
router.set('views', '../views');

router.get('/devices/:id', (req, res) => {
    const device = deviceStorageApi.get(req.params.id);

    res.render('index.hbs', device);

});

router.get('/api/devices', deviceStorageApi.getAll);
// router.get('/api/devices/:id', deviceStorageApi.get);

router.listen(3000);