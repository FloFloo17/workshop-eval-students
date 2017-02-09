var chalk = require('chalk');

var Book = require ('./product').Book;
var DVD = require ('./product').DVD;
var VideoGame = require ('./product').VideoGame;
var service = require ('./rateExchangeService').service;

var products = [
  // Books
  new Book('Preacher Book One', 16.59, '978-1401240455'),
  new Book('JavaScript: The Good Parts', 22.79, '978-0596517748'),
  new Book('Alice In Wonderland', 6.99, '978-1619490222'),
  new Book('Harry Potter and the Sorcerer\'s Stone', 6.85, '978-0439708180'),
  // DVDs
  new DVD('The God, The Bad, and The Ugly', 12.99, true),
  new DVD('Star Wars: A New Hope', 19.99, true),
  new DVD('Rogue One: A Star Wars Story', 17.39, true),
  new DVD('Alice In Wonderland', 14.99, true),
  new DVD('The Wire Season 1', 29.99, false),
  new DVD('Breaking Bad: Season 05', 16.49, false),
  new DVD('Freaks and Geeks: The Complete series', 54.99, false),
  // VideoGame
  new VideoGame('FIFA 17', 39.56, 'PlayStation 4'),
  new VideoGame('XCOM: Enemy Unknown', 15.00, 'PC'),
  new VideoGame('Super Smash Bros Melee', 63.90, 'Game Cube')
];

function findProducts(belowCost) {
  var result = [];
  if(belowCost) {
    for (var i = products.length - 1; i >= 0; i--) {
      var product = products[i];
      if(product.price <= belowCost) {
        result.push(product);
      }
    }
  }
  return result;
}

function calculateTotalprice(products) {
  var sum = 0;
  for (var i = products.length - 1; i >= 0; i--) {
    sum += products[i].price;
  }
  return Math.round(sum * 100) / 100;
}

function toString(currency, rateCurrency) {
  var productsList;
  var productsLength = products.length
  for (var i = products.length - 1; i >= 0; i--) {
    productsList += '\n - ' + products[i].toString(currency, rateCurrency);
  }
  var result = chalk.green('The store is open, ${productsLength} articles are available : ${productsList}');
  return String(result);
}

function open() {
  console.log(toString());
}

module.exports = {
  store: {
    products: products,
    findProducts: findProducts,
    calculateTotalprice: calculateTotalprice,
    open: open
  }
};