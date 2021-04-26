'use strict'

const db = require('../models/index')

async function getUsers (req, res) {
  try {
    const users = await db.User.findAll()
    res.status(200)
    res.send(users)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

async function createUser (req, res) {
  try {
    const user = await db.User.create(req.body)
    res.status(201)
    res.send(user)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
};

async function userLogin (req, res) {
  const { email, password } = req.body
  try {
    const user = await db.User.findAll({
      where: {
        email: email,
        password: password
      }
    })
    res.status(200)
    res.send(user[0])
  } catch (err) {
    console.log(err)
    res.status(500)
  }
}

async function updateDistance (req, res) {
  const { id, distance } = req.params;
  try {
    const user = await db.User.findAll({ where: { id: id } });
    const updated = await user[0].increment(
      ['distance'],
      {by: distance},
    )
    res.status(200);
    res.send(updated)
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

module.exports = { getUsers, createUser, userLogin, updateDistance }
