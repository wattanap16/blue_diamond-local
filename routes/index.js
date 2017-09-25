var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');




var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {

  Product.find(function(err, docs){

       var productRows = [];
       var rowSize = 3;
       for(var i = 0; i < docs.length; i += rowSize) {
         productRows.push(docs.slice(i, i + rowSize));
       }
       res.render('shop/index', { title: 'LOVE FAIRY', products: productRows });
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
   
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {} );

  Product.findById(productId, function(err, product) {
       if (err) {
              return  res.redirect('/');
       }
       cart.add(product, product.id);
       req.session.cart = cart;
       console.log(req.session.cart);
       res.redirect('/');
  });
});

module.exports = router;
