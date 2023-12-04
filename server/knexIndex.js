const knex = require('knex');
const knexConfig = require('./knexfile');
require('dotenv').config();
const enviroment = process.env.NODE_ENV;
console.log('NODE_ENV : ', enviroment);
module.exports = knex(knexConfig[enviroment]);
