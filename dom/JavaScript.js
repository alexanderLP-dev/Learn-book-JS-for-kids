"use strict";

// --- поиск элемента с помощью getElementById

// var headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);

// var newHeadingElement = prompt("Введите новый заголовок");
// // headingElement.innerHTML = newHeadingElement;
// headingElement.style.color = "aqua";
// headingElement.style["text-align"] = "right";

// $("#main-heading").text(newHeadingElement);

// $(какой элемент нужно найти в дереве Dom)
// это функция которая принимает один аргумент
// и называется он строка селектора.# = знак id

// добавление элемента JQuery

// $("body").append("<p>Этот элемент создан JQuery</p>");

// for (let i = 0; i < 3; i++) {
//   let hobby = prompt("Enter your hobby here : ");
//   $("body").append("<p>" + hobby + "</p>");
// }

// Анимация элементов средствами JQuery
// $("body").append("<p> Create with JQuery </p>");

// for (let i = 0; i < 5; i++) {
//   $("h1").fadeOut(700);
//   $("h1").fadeIn(700);
//   if (i < 2) {
//     $("p").hide();
//   } else {
//     $("p").slideDown(1000);

// $("p").fadeOut(700);
// $("p").fadeIn(700);
// $("p").slideUp(1000);
//   }
// }

// $("h1")
//   .slideUp(1000)
//   .slideDown(1000);

// ---------- Упражнения из книги ----

// --- Task 1  Перечислите своих друзей (и сделайте их лучшими!)
let elementH1 = document.getElementById("main-heading");
let main = document.getElementById("main");
let myH1 = "My best friends";
elementH1.innerHTML = myH1;

var friend = ["Mike", "Bob", "Jonh"];
for (let i = 0; i < friend.length; i++) {
  if (friend[i] != friend[1]) {
    $("#main").append("<p>" + friend[i] + " best" + "</p>");
  } else {
    $("#main").append("<p>" + friend[i] + "</p>");
  }
}

// $("p").append(" best ");

// --- Task 2  Мигающий заголовок

for (let k = 0; k < 5; k++) {
  $(elementH1)
    .fadeOut(k * 1000)
    .fadeIn(k * 1000);
}

// --- Task 3 Отложенная анимация ---

let p = document.querySelector("h1 + p + p ");

$(p)
  .delay(3000)
  .fadeOut(2000)
  .fadeIn(2000);

// --- Task 4 Метод fadeTo(число милисекунд, от 0 до 1) ---
// второе значение в скобках указывает - на сколько - "opacity"
$(main).append("<h2>");
$("h2").text("Create with JQuery");

$("h2").fadeTo(2000, 0.1);
