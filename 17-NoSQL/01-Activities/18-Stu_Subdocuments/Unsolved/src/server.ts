import express from 'express';
import db from './config/connection.js';
// Require model
import { Library } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all books
app.get('/books', async (_req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Library.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
