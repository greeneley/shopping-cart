var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Game',
        description: 'Awesome ',
        price: 10
    }),
    new Product({
        imagePath: 'https://static.miniclipcdn.com/images/big-images/motox3m_winter_444x287.jpg',
        title: 'Game 2',
        description: 'Awesome ',
        price: 11
    }),
    new Product({
        imagePath: 'https://cdn.wccftech.com/wp-content/uploads/2018/02/Final-Fantasy-XV-Win-Editions-assets.jpg',
        title: 'Final Fantaxy',
        description: 'Game hay game hay ',
        price: 11
    }),
];
var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    }); 
};
function exit() {
    mongoose.disconnect();
};