'use strict';

const db = require('../models/index');

async function getPublicRuns (req, res) {
  try {
    const publicRuns = await db.PublicRun.findAll();
    res.status(200)
    res.send(publicRuns)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

async function createPublicRun (req, res) {
  try {
    const publicRun = await db.PublicRun.create(req.body)
    res.status(201)
    res.send(publicRun)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

module.exports = { getPublicRuns, createPublicRun }