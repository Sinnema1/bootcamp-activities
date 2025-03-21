import { Schema, model, Document } from 'mongoose';

// Define an interface for the `bookSchema` subdocument 
interface IBook extends Document {
  title: string;
  price: number;
}

// Define an interface for the `librarySchema` document
interface ILibrary extends Document {
  name: string;
  books: IBook[];
  lastAccessed?: Date;
}

// Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

// Define a new schema named `librarySchema` for the parent document
const librarySchema = new Schema<ILibrary>({
  name: { type: String, required: true },
  books: [bookSchema], // Add the `books` subdocument to the parent document as an array
  lastAccessed: { type: Date, default: Date.now },
});

// Create a model named `Library`
const Library = model<ILibrary>('Library', librarySchema);

// Create a new instance of the model including the subdocuments
Library
  .create({
    name: 'City Library',
    books: [
      { title: 'Book One', price: 29.99 },
      { title: 'Book Two', price: 19.99 },
    ],
    lastAccessed: new Date(),
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));

export default Library;