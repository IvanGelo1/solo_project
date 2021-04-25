'use strict';

const db = require('../models/index');

async function getRuns (req, res) {
  try {
    const { userId } = req.params;
    const runs = await db.Run.findAll({ where: {UserId: userId}});
    res.status(200);
    res.send(runs);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

async function createRun (req, res) {
  try {
    const run = await db.Run.create(req.body);
    res.status(201);
    res.send(run);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = { getRuns, createRun };