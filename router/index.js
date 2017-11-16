const express = require('express');
const modelApi = require('../controllers/modelApi');

const router = express.Router();

router.get('/devices/:id', modelApi.get);
router.get('/devices', modelApi.getAll);

router.post('/devices', );

module.exports = router;