var chalk = require('chalk');

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.runningTime;
  this.getDuration = function(){
    return this.runningTime;
  }
  this.toString = function(currency, rateCurrency) {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return new String(chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency + ', duration: ' + this.getDuration() + ' minutes');
  }
}

function Book(name, price, isbn, minDuration, maxDuration) {
  Product.apply(this, [name, price]);
  this.isbn = isbn;
  this.runningTime = (minDuration + maxDuration) / 2;
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

function DVD(name, price, moovie, runningTime) {
  Product.apply(this, [name, price]);
  this.moovie = moovie;
  this.runningTime = runningTime;
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});

function VideoGame(name, price, platform, minDuration, maxDuration) {
  Product.apply(this, [name, price]);
  this.platform = platform;
  this.runningTime = (minDuration + maxDuration) / 2;

}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};