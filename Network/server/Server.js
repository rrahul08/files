// server.js

const express = require('express');
const app = express();
const { Database } = require('arangojs');
const cors = require('cors');
app.use(cors());

// Connect to ArangoDB
const db = new Database('http://localhost:8529');
db.userDatabases('_system');

// Define route to fetch all documents from the collection
app.get('/api/data', async (req, res) => {
  try {
    const cursor = await db.query('FOR doc IN name RETURN doc');
    const data = await cursor.all();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// Handle production


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
