'use strict';

const db = require('../models/index');

async function getUsers (req, res) {
  try {
    const users = await db.User.findAll();
    res.status(200);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

async function createUser (req, res) {
  try {
    const user = await db.User.create(req.body);
    res.status(201);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = { getUsers, createUser };