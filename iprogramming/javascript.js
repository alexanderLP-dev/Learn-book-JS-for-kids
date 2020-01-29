"use strict";

// способ управления когда начнет выполнятся наш код называется
//  интерактивным программированием

// ---- Отложенное выполнение кода и setTimeout

// setTimeout - данная функция принимает двав аргумента

// setTimeout(func, timeOut);
// (функция которую надо выполнить через timeout миллисек.,
// Сколько миллисек. ждать)
// var timeUp = function() {
//   alert("Время вышло!!!");
// }; // создали функцию
// console.log(setTimeout(timeUp, 5000));

// console.log(setTimeout(timeUp, 7000));
// вызвали setTimeout с двумя аргументами

//  вызов setTimeout вернул число 3 - это его идентификатор
//  полученный ID можно передать функции clearTimeout чтобы отменить именно этот таймер

// var goToShop = function() {
//   alert("Time to shopping!");
// };

// var timerID = setTimeout(goToShop, 3000); // в переменную положен ID setTimeout

// clearTimeout(timerID); // отменяет действие таймера

// --- Многократный запуск кода и setInterval ---

// функция похожа на setTimeout , но вызывает переданную функцию повторно
// через заданный ей интервал времени в  миллисек.

// setInterval(func,interval)
// (функция которую вызывают, сколько миллисек. должно пройти между вызовами)
// var num = 2;

// var printMessage = function() {
//   console.log("time has passed : " + num + " sec");
//   num += 2;
// };

// var intervalID = setInterval(printMessage, 2000);
// clearInterval(intervalID);

// --- Анимация элементов с помощью setInterval ---

// var leftOffset = 0; // отступ слева

// var moveHeading = function() {
//   $("#heading").offset({ left: leftOffset });

//   // .offset() - метод для смещения
//   // метод принимает объект, который может содержать свойство left
//   // для задания смещения от левого края или свойство top
//   // для смещения от верха страницы

//   leftOffset++;

//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };

// setInterval(moveHeading, 10);

// ---------- Реакция на действия пользователя

// Каждый раз, когда совершя действие — кликая,
// вводя текст или двигая мышку,—
// в браузере возникает нечто под названием событие

// На события можно подписываться,
// добавляя обработчик события к элементу,
// в котором это событие происходит.

// --- реакция на клики

// var clickHandler = function(event) {
//   console.log("Click " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);

// --- События mousemove

// Событие mousemove возникает
// всякий раз при перемещении мышки

// $("html").mousemove(function(event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

// -------------- упражнения из книги ---------

// -- 1 заголовок перемещается по клику

// $("html").click(function(event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

// -- 2 заголовок по квадрату

var toRight = 220,
  toDown = 220;
let words = document.querySelector("h1");

var moveHeading = function(event) {
  $("#heading").offset({
    left: toRight,
    top: toDown
  });

  if (toRight >= 420 && toDown != 400) {
    toDown++;
  } else if (toDown >= 400 && toRight != 300) {
    toRight--;
  } else if (toRight <= 300 && toDown != 200) {
    toDown--;
  } else {
    toRight++;
  }
};

var intervalId = setInterval(moveHeading, 10);

function stop() {
  clearInterval(intervalId);
}

$("h1").click(stop);
