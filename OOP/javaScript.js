"use strict";

// ---- Объектно Ориентированное Программирование ---
// ООП

// var dog = {
//   name: "Jack",
//   legs: "four",
//   head: "one",
//   awesome: true,
//   sound: "gaf gaf"
// };

// dog.eye = 2;
// dog.tail = "short";
// dog.age = 3;
// dog.sleep = function() {
//   var eyes = this.eye;

//   eyes = "close";
//   console.log(
//     " Zzz - ZzZ " +
//       this.name +
//       " " +
//       " He`s eyes " +
//       eyes +
//       ". " +
//       "He`s old " +
//       this.age +
//       " years. " +
//       " He`s have " +
//       this.legs +
//       " legs"
//   );
// };

// dog.sleep();
// var out = dog.name;
// var outTwo = dog.awesome;
// console.log(out + " is awesome? It`s " + outTwo + "!");
// console.log(dog);

// var cat = {
//   name: "Tom",
//   sound: "Meow",
//   age: 1
// };

// var pig = {
//   name: "Peppa",
//   sound: "Hr-hr",
//   weight: 180
// };

// var speak = function() {
//   console.log(this.name + " say " + this.sound);
// };

// dog.speak = speak;
// cat.speak = speak;
// pig.speak = speak;

// dog.speak();
// cat.speak();
// pig.speak();

// ---- Создание объектов с помощью конструкторов ----

// --- Устройство конструктора ---

// var Car = function(x, y) {
//   this.x = x;
//   this.y = y;
// };

// var drawCar = function(car) {
//   var carHtml = '<img src = "img/car1.jpg">';
//   var carElement = $(carHtml);
//   carElement.css({
//     position: "absolute",
//     left: car.x,
//     top: car.y
//   });

//   $("body").append(carElement);
// };

// var car = new Car(100, 200);
// var tesla = new Car(10, 20);

// drawCar(car);
// drawCar(tesla);

// console.log(car, tesla);

// --- Настройка объектов через прототипы ---

var Car = function(x, y, img, bg) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.speed = Math.floor(Math.random() * 3);
  this.bg = bg;
  console.log("yes!", this.speed, intervalId);
};

Car.prototype.draw = function() {
  var carHtml = this.img;
  var roadHtml = this.bg;
  this.carElement = $(carHtml);
  this.roadElement = $(roadHtml);

  this.roadElement.css({
    position: "relative",
    left: 50,
    top: 0
  });

  this.carElement.css({
    position: "absolute",
    transform: "scale(0.5)",
    left: this.x,
    top: this.y,
    "z-index": 1
  });

  $("body").append(this.carElement);
  $("body").append(this.roadElement);
};

Car.prototype.moveRight = function() {
  if (this.x != 400) {
    this.x += this.speed;
  } else {
    clearInterval(intervalId);
  }

  this.carElement.css({
    left: this.x,
    top: this.y
  });

  return this.speed;
};

var tesla = new Car(
  0,
  -33,
  '<img src = "img/car1.png" >',
  '<img src ="img/finish.jpg">'
);
var zaz = new Car(
  30,
  47,
  '<img src = "img/car2.png" >',
  '<img src ="img/finish.jpg">'
);
var flash = new Car(
  0,
  175,
  '<img src = "img/car3.png" >',
  '<img src ="img/finish.jpg">'
);

tesla.draw();
zaz.draw();
flash.draw();

var intervalId = setInterval(function() {
  tesla.moveRight();
  zaz.moveRight();
  flash.moveRight();
}, 20);

// $("button").click(start);
// -- добавляем метод moveRight ---
