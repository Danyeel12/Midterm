/* Name: Daniel Miranda 
   Student ID: 301249991
   Midterm: Summer2023
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let Book = require('../models/book');

let bookController = require('../controllers/book');




router.get('/', bookController.displayBookList);

router.get('/add', bookController.displayAddPage);


router.post('/add', bookController.processAddPage);


router.get('/edit/:id', bookController.displayEditPage);



router.post('/edit/:id', bookController.processEditPage);



router.get('/delete/:id', bookController.performDelete);

module.exports = router;