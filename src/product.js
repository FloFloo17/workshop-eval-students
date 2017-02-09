var chalk = require('chalk');

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.toString = function(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
  }
}

function Book(name, price, isbn) {
  Product.apply(this, [name, price]);
  this.isbn = isbn;
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

function DVD(name, price, moovie) {
  Product.apply(this, [name, price]);
  this.moovie = moovie;
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});

function VideoGame(name, price, platform) {
  Product.apply(this, [name, price]);
  this.platform = platform;
}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};