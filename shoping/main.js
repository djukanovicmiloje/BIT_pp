"use strict"
function Product(name, price,  expirationDate){
 this.name = name;
 this.price = price;
 this.expirationDate = expirationDate;
 this.ID = parseInt(Math.random()*(99999 - 10000) + 10000);
 this.getInfo = function (){
  return this.ID + ", " + this.name + ", " + this.price;
 }
}

function ShoppingBag(){
 this.listOfProducts = [];
 this.addProduct = function(product){
  if(product instanceof Product){
   this.listOfProducts.push(product);
  }
 };
 this.getTotal = function(){
  var total = 0;
  for(var i = 0; i < this.listOfProducts.length; i++){
   total += this.listOfProducts[i].price;
  }
  return total;
 };
 this.getAverage = function(){
  var average = this.getTotal() / this.listOfProducts.length;
  return average;
 }
}

var banana = new Product("banana", 130, new Date());
var ZoranovaKorpa = new ShoppingBag();
ZoranovaKorpa.addProduct(banana);
ZoranovaKorpa.addProduct(banana);
console.log(ZoranovaKorpa.getAverage());
