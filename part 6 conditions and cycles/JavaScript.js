"use strict";

// --------------------- Конструкция IF ----------------

// var message = "Привет, мир !";
// console.log(message);

// var name = "Николай";
// console.log(`Привет, ${name} !`);

// if (name.length > 6) {
//   console.log("Ну и длинное же у вас имя!");
// } else {
//   console.log("Имя у вас не из длинных");
// }

// if(проверка истинно ли условие){
//     console.log("делаем что то") // код который выполнится, если условие true
// }else {
// console.log("делаем что то") // код выполнится,если условие false
// }

// ------------------- цепочка конструкций if,else ------------------

// var lemonChicken = false;
// var beefWithBlackBean = true;
// var sweetAndSourPork = true;

// if (lemonChicken) {
//   console.log("Отлично ! Я буду курицу с лимоном!");
// } else if (beefWithBlackBean) {
//   console.log("Заказываю говядину!");
// } else {
//   console.log("Что ж ,остается рис с яйцом");
// }

// ------------- придумано ---------------

// var shopOpen = 10;
// var timeToShopping = new Date();
// var time = timeToShopping.getHours();
// var minute = timeToShopping.getMinutes();
// if (time > shopOpen) {
//   console.log(`Отправляемся в магазин время ${time}:${minute}`);
// } else if (time == shopOpen) {
//   console.log(`Магазин только что открылся время ${time}:${minute}`);
// } else {
//   console.log(`Магазин еще закрыт время ${time}:${minute}`);
// }
// console.log(time);
// console.log(minute);

// ---------------------------------------------

// if (условие1) {
//   console.log("Сделай это , если условие1 истина");
// } else if (условие2) {
//   console.log("Сделай это , если условие2 истина");
// } else if (условие3) {
//   console.log("Сделай это , если условие3 истина");
// } else {
//   console.log("Иначе сделай это");
// }

//  Если первое условие дает true, выполнить код из первого тела.
//  Иначе, если второе условие дает true, выполнить второе тело.
//  Иначе, если третье условие дает true, выполнить третье тело.
//  Иначе выполнить тело else

// --------- упражнение из книги -------------

// var name = "Alex";

// if (name === "Alex") {
//   console.log("Привет мне!");
// } else if (name === "Мама") {
//   console.log("Привет Мама!");
// } else if (name === "Папа") {
//   console.log("Привет Папа");
// } else {
//   console.log("Привет незнакомец!");
// }

// -----------------------------------------

// ------------- Циклы ----------------

// ----------- Цикл While ---------------

// var sheepCounted = 0;

// while (sheepCounted <= 10) {
//   console.log(`Посчитано ${sheepCounted} овец`);
//   sheepCounted++;
// }

// console.log("Конец.");

// ------------ Цикл for --------------------

// for (var sheepCounted = 0; sheepCounted <= 10; sheepCounted++) {
//   console.log(`Посчитано ${sheepCounted} овец`);
// }
// console.log("Конец.");

// var timesToSayHello = 3;
// for (var i = 0; i < timesToSayHello; i++) {
//   console.log("Привет!");
// }

// var animals = ["лев", "фламинго", "белый медведь", "удав"];
// for (var i = 0; i < animals.length; i++) {
//   console.log("В этом зоопарке есть " + animals[i] + ".");
// }

// ---------- 7 пятниц на неделе -------

// var week = [];
// for (var i = 0; week.length < 7; i++) {
//   week.push("friday");
// }
// console.log(week);

// for (var x = 2; x < 10000; x = x * 2) {
//   console.log(x);
// }

// ------------------ задания из книги -----------

// for (var x = 3; x < 10000; x = x * 3) {
//   console.log(x);
// }

// var animals = [];

// animals.push("cat");
// animals.push("horse");
// animals.push("fish");
// animals.push("dog");

// for (var i = 0; i < animals.length; i++) {
//   console.log((animals[i] += " - прекрасное животное"));
// }

// console.log(animals);

// --------------------------

// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// var randomString = "";

// while (randomString.length < 6) {
//   var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//   randomString += randomLetter;
// }

// console.log(randomString);

// -------------------------

// var input = "JavaScript is awesome!";
// var output = " ";

// for (var i = 0; i < input.length; i++) {
//   if (input[i] === "a") {
//     output += "4";
//   } else if (input[i] === "i") {
//     output += "1";
//   } else if (input[i] === "e") {
//     output += "3";
//   } else if (input[i] === "o") {
//     output += "0";
//   } else {
//     output += input[i];
//   }
// }
// console.log(output);

