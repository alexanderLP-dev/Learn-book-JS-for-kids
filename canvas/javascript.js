"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); // контекст для рисования в "2d"
// var rect = ctx.fillRect(20, 20, 20, 20);

// ctx.закрашенный квадрат(x,y,ширина,высота)

// for (var i = 0; i < 3; i++) {
//   ctx.fillRect(i * 50, i * 40, 20, 20);
// }

// --- рисуем челоаека

// var bg = ctx.fillRect(25, 10, 200, 200);
// ctx.fillStyle = "beige";
// var head = ctx.fillRect(100, 20, 50, 50);
// var neck = ctx.fillRect(120, 70, 10, 20);
// var handLeft = ctx.fillRect(70, 80, 10, 10);
// var handRight = ctx.fillRect(170, 80, 10, 10);
// ctx.fillStyle = "red";
// var hands = ctx.fillRect(80, 80, 90, 10);
// var torso = ctx.fillRect(100, 90, 50, 50);
// var bandage = ctx.fillRect(100, 25, 50, 10);
// ctx.fillStyle = "grey";
// var legsLeft = ctx.fillRect(100, 140, 10, 50);
// var legsLeft = ctx.fillRect(140, 140, 10, 50);
// ctx.strokeStyle = "white";
// var belt = ctx.strokeRect(100, 130, 50, 10);
// ctx.fillStyle = "black";
// var eyeLeft = ctx.fillRect(110, 40, 10, 10);
// var eyeRight = ctx.fillRect(130, 40, 10, 10);
// var buckle = ctx.fillRect(115, 130, 20, 10);
// var mouth = ctx.fillRect(115.5, 60, 20, 5);
// ctx.fillStyle = "white";
// var clasp = ctx.fillRect(130, 133.5, 3, 3);
// ctx.fillStyle = "brown";
// var shoesLeft = ctx.fillRect(90, 180, 20, 10);
// var shoesRight = ctx.fillRect(140, 180, 20, 10);

// линии или пути

// ctx.lineWidth = 4;
// ctx.strokeStyle = "aqua";

// ctx.beginPath(); // начало нового пути
// ctx.moveTo(10, 10); // куда поставить "перо"
// ctx.lineTo(60, 60); // от точки куда поставили перо до точки x,y
// ctx.moveTo(60, 10);
// ctx.lineTo(10, 60);
// ctx.moveTo(35, 10);
// ctx.lineTo(35, 60);
// ctx.moveTo(10, 35);
// ctx.lineTo(60, 35);
// ctx.stroke(); // метод который отрисовует линию.

// ---- еще человек

// ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.strokeRect(280, 50, 20, 20);
// ctx.moveTo(290, 70);
// ctx.lineTo(290, 120);
// ctx.moveTo(290, 120);
// ctx.lineTo(275, 150);
// ctx.moveTo(290, 120);
// ctx.lineTo(305, 150);
// ctx.moveTo(290, 90);
// ctx.lineTo(270, 70);
// ctx.moveTo(290, 90);
// ctx.lineTo(310, 70);

// ctx.stroke();

// --- еще дом
// ctx.fillStyle = "aqua";
// ctx.beginPath();
// ctx.moveTo(300, 100);
// ctx.lineTo(250, 150);
// ctx.lineTo(250, 250);
// ctx.lineTo(350, 250);
// ctx.lineTo(350, 150);
// ctx.lineTo(300, 100);
// ctx.fill();

// ---- дуги и окружности ---

// ctx.lineWidth = 2;
// ctx.strokeStyle = "red";

// ctx.beginPath();
// ctx.arc(300, 100, 30, 0, Math.PI / 2, false);
// ctx.stroke();

// ctx.lineWidth = 4;
// ctx.strokeStyle = "orange";

// ctx.beginPath();
// ctx.arc(300, 200, 30, 0, Math.PI, false);
// ctx.stroke();

// ctx.lineWidth = 6;
// ctx.strokeStyle = "green";

// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.stroke();

// ---рисование нескольких окружностей функцией----

// var circle = function(x, y, radius, fillCircle) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);

//   if (fillCircle == true) {
//     ctx.fill();
//   } else {
//     ctx.stroke();
//   }
// };

// ctx.beginPath();
// ctx.lineWidth = 2;

// circle(300, 70, 30);
// circle(300, 140, 40);
// circle(300, 240, 60);

// circle(288, 60, 5, true);
// circle(312, 60, 5, true);
// circle(288, 60, 5, true);

// for (var i = 115; i < 190; i += 25) {
//   circle(300, i, 5, true);
//   console.log(i);
// }

// for (var k = 288; k < 316; k += 12) {
//   circle(k, 85, 5, true);
// }
// ctx.fillStyle = "orange";
// circle(300, 73, 5, true);

// ------ рисование по массиву точек ---

// // var mysteryPoints = [
// //   [50, 50],
// //   [50, 100],
// //   [25, 120],
// //   [100, 50],
// //   [70, 90],
// //   [100, 90],
// //   [70, 120]
// // ];

// var points = [
//   [50, 50],
//   [50, 100],
//   [100, 100],
//   [100, 50],
//   [50, 50]
// ];

// var drawPoints = function() {
//   ctx.beginPath();
//   ctx.lineWidth = 1;
//   ctx.moveTo(points[0][0], points[0][1]);

//   for (var i = 0; i < points.length; i++) {
//     ctx.lineTo(points[i][0], points[i][1]);
//   }
//   //   ctx.moveTo(mysteryPoints[0][0], mysteryPoints[0][1]);
//   //   for (var k = 0; k < mysteryPoints.length; k++) {
//   //     ctx.lineTo(mysteryPoints[k][0], mysteryPoints[k][1]);
//   //   }
//   ctx.stroke();
// };

// drawPoints(points);
// // drawPoints(mysteryPoints);

// -------- рисование мышкой -----------

// var drawMouse = function(event) {
//   ctx.beginPath();
//   ctx.arc(event.pageX, event.pageY, 3, 0, Math.PI * 2, false);
//   ctx.stroke();
// };

// drawMouse(50, 50, 3);
// $("canvas").mousedown(function() {
//   $("canvas").mousemove(function(event) {
//     ctx.beginPath();
//     ctx.arc(event.pageX - 100, event.pageY - 100, 3, 0, Math.PI * 2, false);
//     ctx.stroke();
//   });
// });
