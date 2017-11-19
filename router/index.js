const express = require('express');
const modelApi = require('../controllers/modelApi');
const bodyParser = require('body-parser');

const router = express.Router();

router.use("/devices", bodyParser.urlencoded({extended: false}));

router.get('/devices/:id', modelApi.get);
router.get('/devices/', modelApi.getAll);

router.post('/devices/', modelApi.create);

// router.post('/devices', );

module.exports = router;