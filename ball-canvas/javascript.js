"use strict";

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width,
  height = canvas.height;

var Ball = function() {
  this.x = 100;
  this.y = 100; // x,y начальная позиция

  this.xSpeed = 2;
  this.ySpeed = 3; // x - горизонт.скорость, y - вертикал.скорость
  this.color = color;
};

var circle = function(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

Ball.prototype.draw = function() {
  circle(this.x, this.y, 5, true);
};

Ball.prototype.move = function() {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function() {
  if (this.x < 0 || this.x > 600) {
    this.xSpeed = -this.xSpeed;
    ball.randomColor();
  }
  if (this.y < 0 || this.y > 400) {
    this.ySpeed = -this.ySpeed;
    ball.randomColor();
  }
};
var ball = new Ball();
var intervalId = setInterval(function() {
  ctx.clearRect(0, 0, 600, 400);

  ball.draw();
  ball.move();
  ball.checkCollision();
}, 10);

Ball.prototype.randomColor = function(whichColor) {
  whichColor = color[Math.floor(Math.random() * color.length)];

  for (var i = 0; i < color.length; i++) {
    ctx.fillStyle = whichColor;
  }
};
var color = ["Red", "Orange", "Black", "Green", "Blue", "Purple"];
