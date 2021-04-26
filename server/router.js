'use strict'

const express = require('express')
const router = express.Router()

const userController = require('./controllers/user.controller')
const runController = require('./controllers/run.controller')
const traceController = require('./controllers/mapTracer.controller')
const publicRunController = require('./controllers/publicRun.controller');

router.get('/user', userController.getUsers)
router.post('/user', userController.createUser)
router.post('/login', userController.userLogin)
router.put('/user/:id/:distance', userController.updateDistance);

router.get('/runs/:userId', runController.getRuns)
router.post('/run', runController.createRun)

router.get('/runTrace/:id', traceController.getRunTrace)
router.post('/runTrace', traceController.createRunTrace)

router.get('/public', publicRunController.getPublicRuns);
router.post('/public', publicRunController.createPublicRun);

module.exports = router
