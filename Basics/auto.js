var cars = [];
var count = 0;

function autoCar (brand, model, year){
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var manyCars = prompt(`Cuantos carros desea agregar?`);

while(count < manyCars){
  var newBrand = prompt(`Introduzca la siguiente informacion. Marca: `);
  var newModel = prompt(`Modelo: `);
  var newYear = prompt(`Annio: `);
  var newCar = new autoCar(newBrand, newModel, newYear);

  cars.push(newCar);
  count++;
}

console.table(cars);