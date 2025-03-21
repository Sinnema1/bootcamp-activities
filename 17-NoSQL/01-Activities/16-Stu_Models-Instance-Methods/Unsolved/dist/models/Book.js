import { Schema, model } from "mongoose";
// Define a new schema named `bookSchema`
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: String,
    price: { type: Number, required: true },
});
// Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
    const discountPrice = this.price * 0.5;
    console.log(`the discounted price is ${discountPrice}`);
    return discountPrice;
};
// Create a model named `Book`
const Book = model("Book", bookSchema);
// Create a new instance of the model
const discountedBook = new Book({
    title: "Discounted Books",
    author: "Unknown Author",
    price: 100,
});
// Call the custom instance method on the instance
const discount = discountedBook.getDiscount();
console.log(`Discounted price: ${discount}`);
export default Book;
