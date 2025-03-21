import { Schema, model } from 'mongoose';
// Define a new schema named `bookSchema` for the subdocument
const bookSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
});
// Define a new schema named `librarySchema` for the parent document
const librarySchema = new Schema({
    name: { type: String, required: true },
    books: [bookSchema], // Add the `books` subdocument to the parent document as an array
    lastAccessed: { type: Date, default: Date.now },
});
// Create a model named `Library`
const Library = model('Library', librarySchema);
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
