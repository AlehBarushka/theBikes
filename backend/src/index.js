const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./database/index.js');

dotenv.config();

const app = express();

const start = async () => {
  try {
    app.listen(process.env.SERVER_PORT, () =>
      console.log(`Server is listening on port ${process.env.SERVER_PORT}...`),
    );

    await sequelize.authenticate();
    console.log('Database Connected!');
  } catch (error) {
    console.log(e);
  }
};

start();
