const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/E-commerce').then(() => {
    console.log("Database Connected...");

}).catch((err) => {
    console.log("error : " + err);

})