'use strict'

const db = require('../models/index')

async function getRunTrace (req, res) {
  const { id } = req.params
  try {
    const mapTrace = await db.MapTrace.findAll({ where: { RunId: id } })
    res.status(200)
    res.send(mapTrace)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

async function createRunTrace (req, res) {
  try {
    const runTrace = await db.MapTrace.create(req.body)
    res.status(201)
    res.send(runTrace)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

module.exports = { getRunTrace, createRunTrace }
