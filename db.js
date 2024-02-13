const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL // Use your PostgreSQL connection string
});

module.exports = pool;
