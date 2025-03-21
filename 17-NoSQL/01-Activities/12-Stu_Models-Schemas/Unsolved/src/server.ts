import express from 'express';
import db from './config/connection.js';
// TODO: Add a comment describing the functionality of the code below
// Import the Book model to interact with the books collection in the database
import { Book } from './models/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/books', async (_req, res) => {
  try {
    // TODO: Add a comment describing the functionality of the code below
    // Fetch all book documents from the books collection
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Start the server once the database connection is open
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});