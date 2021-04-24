'use strict';

const express = require('express');
const router = express.Router();
const runModel = require('./controllers/run.controller');
const traceModel = require('./controllers/mapTracer.controller');

router.get('/runs', runModel.getRuns);
router.post('/run', runModel.createRun);
router.get('/runTrace/:id', traceModel.getRunTrace);
router.post('/runTrace', traceModel.createRunTrace);


module.exports = router;
