import sequelize from '../config/connection.js';
import { ReaderFactory } from './Reader.js';
import { LibraryCardFactory } from './LibraryCard.js';
import { BookFactory } from './Book.js';
import { AuthorFactory } from './Author.js';

// TODO: Initialize the models
const Author = AuthorFactory(sequelize);
const Book = BookFactory(sequelize);
const LibraryCard = LibraryCardFactory(sequelize);
const Reader = ReaderFactory(sequelize);

// Create associations between the models

Reader.hasOne(LibraryCard, {
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader);

// TODO: An author can have many books
Author.hasMany(Book, {
  onDelete: "CASCADE"
});

// TODO: A book can only have one author
Book.belongsTo(Author);


// TODO: A book can have many readers and a reader can have many books
Book.belongsToMany(Reader, { through: 'BookReaderJoin' });
Reader.belongsToMany(Book, { through: 'BookReaderJoin' });


export { Reader, LibraryCard };
