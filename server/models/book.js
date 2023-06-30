/* Name: Daniel Miranda 
   Student ID: 301249991
   Midterm: Summer2023
*/
let mongoose = require('mongoose');

 let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', bookModel);