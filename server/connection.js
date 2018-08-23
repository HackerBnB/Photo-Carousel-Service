const { Pool } = require('pg')

const connection = new Pool({
  host: 'ec2-54-183-62-245.us-west-1.compute.amazonaws.com',
  user: 'app',
  password: '1234',
  database: 'homely',
  port: 5432,
});

module.exports = connection;