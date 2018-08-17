const { Pool } = require('pg')

const connection = new Pool({
  database: 'homely',
  port: 5432,
});

module.exports = connection;