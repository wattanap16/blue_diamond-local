
var Product = require('../models/product');

var mongoose = require('mongoose');


//mongoose.connect('localhost:27017/shopping');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping',{useMongoClient: true});

var products = [
        new Product({
            imagePath: 'https://i.pinimg.com/564x/d1/3a/29/d13a290fd3e1f01122e8da069511a1b3--eyewear-tart.jpg',
            title: 'TART ARNEL AMBER',
            description: 'Lorem ipsum dolor sit amet consectetur',
            price: 11
        }),

        new Product({
            imagePath: 'http://optvisions.com/shop_v52/VINTAGE/TART-FDR-4424-1.JPG',
            title: 'TART FDR AMBER',
            description: ' Quis, ipsam neque odio at perferendis',
            price: 14
        }),

        new Product({
            imagePath: 'http://www.framedbyoleg.com/uploads/3/4/0/7/34072305/s213373410162179647_p180_i1_w320.jpeg',
            title: 'TART',
            description: 'possimus maiores totam fugiat natus dicta?',
            price: 21
        }),

        new Product({
            imagePath: 'http://img-cdn.jg.jugem.jp/e65/1554858/20140910_1141118.jpg',
            title: 'OLD FOCALS',
            description: 'adipisicing elit.',
            price: 16
        }),

        new Product({
            imagePath: 'https://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=17795299',
            title: 'TART FDR BROWN',
            description: 'Quis, ipsam neque odio',
            price: 18
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