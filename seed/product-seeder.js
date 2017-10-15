
var Product = require('../models/product');

var mongoose = require('mongoose');


//mongoose.connect('localhost:27017/shopping');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping',{useMongoClient: true});

var products = [
        new Product({
            imagePath: './../images/ring-pics/ring-1.jpg',
            title: 'ZARTIER',
            description: 'East-West Solitaire Engagement Ring in 14k White Gold',
            price: 259
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-2.png',
            title: 'FAIRY',
            description: 'Hand-Engraved Solitaire Engagement Ring in 14k White Gold',
            price: 299
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-3.jpg',
            title: 'HIDEKO',
            description: 'Monique Lhuillier Solitaire Engagement Ring in Platinum',
            price: 299
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-4.png',
            title: 'PINGTREE',
            description: 'Truly Zac Posen East-West Solitaire Engagement Ring in Platinum',
            price: 279
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-5.png',
            title: 'KUNEAU',
            description: 'Petite Nouveau Five-Prong Solitaire Engagement Ring in 14k White Gold',
            price: 269
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-6.jpg',
            title: 'BIRTILALS',
            description: 'Classic Comfort Fit Solitaire Engagement Ring in 14k White Gold (2.5mm)',
            price: 259
        }),

        
        new Product({
            imagePath: './../images/ring-pics/ring-7.png',
            title: 'KRIBAWA',
            description: 'Milgrain Knife-Edge Solitaire Engagement Ring in 14k White Gold',
            price: 259
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-8.png',
            title: 'BRIKAWA',
            description: 'Tapered Cathedral Solitaire Engagement Ring in 14k White Gold',
            price: 269
        }),

        new Product({
            imagePath: './../images/ring-pics/ring-9.png',
            title: 'BARTIER',
            description: 'Nouveau Knife Edge Six Prong Solitaire Engagement Ring in 14k White Gold',
            price: 299
        }),


];

var done =0 ;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect(); 
}