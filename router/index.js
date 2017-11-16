const express = require('express');
const modelApi = require('../controllers/modelApi');
const hbs = require('hbs');


const router = express.Router();

router.get('/devices/:id', modelApi.get);
router.get('/devices', modelApi.getAll);

router.use('api/devices/:id?status=on', (req, res) => {    
    if (req.method == 'PUT') {        
        modelApi.turnOnDevice(req.params.id);
    }
});

router.use('api/devices/:id?status=off', (req, res) => {    
    if (req.method == 'PUT') {        
        modelApi.turnOffDevice(req.params.id);
    }
});
// router.listen(3000);

module.exports = router;