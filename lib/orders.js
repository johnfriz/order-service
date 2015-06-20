var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var sha1 = require('sha1');
var orders = [];

function orderRoute() {
  var order = new express.Router();
  order.use(cors());
  order.use(bodyParser());

  // Create a new order
  order.post('/', function(req, res){
    var order = req.body;

    if(!order.barcode) {return res.status(400).json({'error':'Field "barcode" is required'});}
    if(!order.price) {return res.status(400).json({'error':'Field "price" is required'});}
    if(!order.quantity) {return res.status(400).json({'error':'Field "quantity" is required'});}

    order.total = order.price * order.quantity;
    order.date = new Date();

    var orderId = sha1(JSON.stringify(order));

    order.id = orderId;
    orders.push(order);
    return res.json(order);
  });

  // list orders
  order.get('/', function(req, res){
    return res.json(orders);
  });


  // Update order quantity
  order.put('/:id', function(req, res){
    var orderId = req.params.id;
    console.log('Order Id = ', orderId);
    var order;

    for (var i = 0; i < orders.length; i++) {
      if(orders[i].id === orderId) {
        order = orders[i];
        order.quantity = req.body.quantity;
        order.total = order.quantity * order.price;
        return res.json(order);
      }
    }
    return res.status(400).json({'error':'Invalid Order Id'})
  });

  // Update order quantity
  order.delete('/:id', function(req, res){
    var orderId = req.params.id;
    var order;

    for (var i = 0; i < orders.length; i++) {
      if(orders[i].id === orderId) {
        orders.splice(i, 1);
        return res.json({});
      }
    }
    return res.status(400).json({'error':'Invalid Order Id'})
  });


  return order;
}

module.exports = orderRoute;
