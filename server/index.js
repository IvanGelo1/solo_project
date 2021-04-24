'use strict';

const express = require('express');
const router = require('./router');
const db = require('./models/index');
const dotenv = require('dotenv')

dotenv.config();

const app = express();
// const port = 3000;

app.use(express.json());
app.use(router);

app.listen(process.env.SERVER_PORT , async () => {
  console.log(`Server started at http://localhost:${process.env.SERVER_PORT}`);
  try {
    await db.sequelize.sync();
    console.log('Database connected');
  } catch(err) {
    console.error(err);
  };
});

// (() => )()