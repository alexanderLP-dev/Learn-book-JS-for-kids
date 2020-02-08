"use strict";

var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = canvas.width,
  height = canvas.height;

var circle = function(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);

  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

// конструктор Ball
var Ball = function() {
  this.x = width / 2;
  this.y = height / 2;
  this.xSpeed = 5;
  this.ySpeed = 0;
};

// метод для движения мяча и прохода сквозь стенки холста
Ball.prototype.move = function() {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0) {
    this.x = width;
  } else if (this.x > width) {
    this.x = 0;
  }

  if (this.y < 0) {
    this.y = height;
  } else if (this.y > height) {
    this.y = 0;
  }
};

//  метод для отрисовки окружности "мяча"
Ball.prototype.draw = function() {
  circle(this.x, this.y, 10, true);
};

// метод для определения клавиш что будет происходить по нажатию
Ball.prototype.setDirection = function(direction) {
  if (direction === "up") {
    this.xSpeed = 0;
    this.ySpeed = -5;
  } else if (direction === "down") {
    this.xSpeed = 0;
    this.ySpeed = +5;
  } else if (direction === "right") {
    this.xSpeed = 5;
    this.ySpeed = 0;
  } else if (direction === "left") {
    this.xSpeed = -5;
    this.ySpeed = 0;
  } else if (direction === "speedUp") {
    this.xSpeed += this.xSpeed;
    this.ySpeed += this.ySpeed;
  } else if (direction === "stop") {
    this.xSpeed = 0;
    this.ySpeed = 0;
    clearInterval(intervalId);
  } else if (direction === "enter") {
    var intervalId = setInterval(function() {
      ctx.clearRect(0, 0, width, height);
      ball.draw();
      ball.move();
      ctx.strokeRect(0, 0, width, height);
    }, 30);
  }
};

var ball = new Ball();

ball.draw();

var keyNames = {
  87: "up",
  83: "down",
  65: "left",
  32: "space",
  16: "shift",
  18: "alt",
  13: "enter",
  68: "right",
  90: "z"
  // 88: "x"
};

var keyActions = {
  87: "up",
  83: "down",
  65: "left",
  68: "right",
  13: "enter",
  32: "stop",
  90: "speedUp"
  // 88: "speedDown"
};

$("body").keydown(function(event) {
  var direction = keyActions[event.keyCode];
  ball.setDirection(direction);

  console.log(event.keyCode, direction);

  //   console.log(keyNames[event.keyCode]);
});

var h2 = document.querySelector("h2");
if (this.x < 600 && this.y < 400) {
  $(h2).fadeTo(1000, 0.3);
  clearInterval(interval);
} else {
  var interval = setInterval(function() {
    $(h2).fadeOut(1000);
    $(h2).fadeIn(1000);
  }, 30);
}
