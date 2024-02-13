const express = require('express');
const cors = require('cors');
const pool = require('./db'); // We will set up this database connection next
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // allows us to access request body as JSON

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));