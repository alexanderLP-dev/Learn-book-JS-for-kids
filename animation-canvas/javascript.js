"use strict";

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// var position = 0;
// var size = 0;
// var intervalId = setInterval(function() {
//   ctx.clearRect(0, 0, 600, 400);
//   ctx.fillRect(position, 0, size, size);
//   size++;
//   position++;

//   if (position > 200) {
//     position = 0;
//     size = 0;
//   }
// }, 30);

// ----------- пчела -----------

// var x = 190,
//   y = 190,
//   intervalId = setInterval(function() {
//     ctx.clearRect(0, 0, 600, 500);

//     drawBee(x, y);
//     x = update(x);
//     y = update(y);

//     ctx.strokeRect(0, 0, 600, 500);
//   }, 30);

// var circle = function(x, y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);

//   if (fillCircle == true) {
//     ctx.fill();
//   } else {
//     ctx.stroke();
//   }
// };

// var drawBee = function(x, y) {
//   ctx.lineWidth = 2;
//   ctx.strokeStyle = "black";
//   ctx.fillStyle = "gold";

//   circle(x, y, 8, true);
//   circle(x, y, 8, false);

//   circle(x - 5, y - 11, 5, false);
//   circle(x + 5, y - 11, 5, false);
//   circle(x - 2, y - 1, 2, false);
//   circle(x + 2, y - 1, 2, false);
// };

// // drawBee(300, 200);

// var update = function(coordinate) {
//   var offset = Math.random() * 4 - 2;
//   coordinate -= offset;

//   if (coordinate > 200) {
//     coordinate = 200;
//   }
//   if (coordinate < 0) {
//     coordinate = 0;
//   }

//   return coordinate;
// };
