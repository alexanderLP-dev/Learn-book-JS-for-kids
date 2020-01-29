"use strict";

var getRandomNum = function(size) {
  return Math.floor(Math.random() * size);
};

var width = 800;
var height = 800;
var clicks = 0;
var outClicks = 5;

var target = {
  x: getRandomNum(width),
  y: getRandomNum(height)
};
console.log(target.x, target.y);

$("#map").click(function(event) {
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);
  if (distance < 8) {
    alert("Клад найден!!! Сделано кликов: " + clicks);
  } else if (outClicks == 0) {
    alert("У вас кончились попытки : " + outClicks);
  }
  outClicks--;
  clicks++;
});

var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

var getDistanceHint = function(distance) {
  if (distance < 10) {
    return "Обожжешься! Попыток осталось :  " + outClicks;
  } else if (distance < 20) {
    return "Очень горячо! Попыток осталось :  " + outClicks;
  } else if (distance < 40) {
    return "Горячо! Попыток осталось :  " + outClicks;
  } else if (distance < 80) {
    return "Тепло! Попыток осталось :  " + outClicks;
  } else if (distance < 160) {
    return "Холодно! Попыток осталось :  " + outClicks;
  } else if (distance < 320) {
    return "Очень холодно! Попыток осталось :  " + outClicks;
  } else if (distance < 500) {
    return "Очень - Очень холодно! Попыток осталось :  " + outClicks;
  } else if (distance < 700) {
    return "Супер - Очень холодно! Попыток осталось :  " + outClicks;
  } else {
    return "Замерзнешь! Попыток осталось :  " + outClicks;
  }
};
