"use strict";

// ------------- functions -----------

// Функция - это механизм для многократного использования частей кода
// позволяет запускать один и тот же код из разных частей программы

// ----- Базовое устройство функции -------

// function first() {
//   console.log("Делаем что-то");
// }

// first();

// --- Создаем простую функцию --------

// var firstFunction = function() {
//   // переменная которой присвоили функцию
//   console.log(" -- Моя первая функция! -- "); // Тело функции
// };

// firstFunction(); // вызов функции(выполняется ее тело функции)

// Возвращаемое значение — это значение,
// которое функция выдает наружу, чтобы потом
// его можно было использовать где угодно в программе.

// ----- передача аргументов в функцию ------

// var sayHello = function(name) {
//   console.log("Привет " + name + "!");
// };
// sayHello("Alex");

// ------- печатаем котиков -----------

// var drawCats = function(howMany) {
//   for (var i = 1; i <= howMany; i++) {
//     console.log(i + " = ^.^ = ");
//   }
// };
// drawCats(5);

//  ----- передача в функцию нескольких аргументов -----

// var manyArguments = function(argument1, argument2) {
//   console.log(" Первый аргумент " + argument1);
//   console.log(" Второй аргумент " + argument2);
// };

// manyArguments("Привет", "Мир");

// var printMultipleTimws = function(howManyTimes, whatDraw) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatDraw);
//   }
// };

// printMultipleTimws(3, " =^.^= ");

// ----------- Возврат значения из функции --------

// var double = function(number) {
//   return number * 2;
// };

// console.log(double(5));

// Функции способны принимать несколько аргументов, но возвращать может только одно значение
// если не указать что нужно возвращать то вернет undefined

//  -------- Вызов функции в качестве значения -------

// var more = function(number) {
//   return number * 2;
// };

// console.log(more(more(5)));

// ---------- Упрощаем код с помощью функций --------

// ---- Функция для выбора случайного слова ----
// randomWords[Math.floor(Math.random() * randomWords.length)];

// var pickRandomWords = function(words) {
//   return words[Math.floor(Math.random() * words.length)];
// };

// var randomCars = ["жигули", "москвич", "toyota"];

// console.log(pickRandomCars(randomCars));

// var randomAnimals = ["конь", "коза", "слон", "жираф"];
// console.log(pickRandomCars(randomAnimals));

// ---- рандомная дразнилка -----------

// var randomBodyParts = ["лоб", "нос", "глаз"];
// var randomAdjectives = ["вонючая", "большая", "слепая"];
// var randomWords = ["лампа", "дубина", "мышь"];

// console.log(
//   ` Эй твой  ${pickRandomWords(randomBodyParts)} как ${pickRandomWords(
//     randomAdjectives
//   )}  ${pickRandomWords(randomWords)}
//   `
// );

// ---- функция дразнилка ------

// var generateRandomInsult = function() {
//   var randomBodyParts = ["лоб", "нос", "глаз"];
//   var randomAdjectives = ["вонючая", "большая", "слепая"];
//   var randomWords = ["лампа", "дубина", "мышь"];

//   var randomString = ` Эй твой  ${pickRandomWords(
//     randomBodyParts
//   )} как ${pickRandomWords(randomAdjectives)}  ${pickRandomWords(randomWords)}`;

//   return randomString;
// };

// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());

// --------- Ранний выход из функции по return ------

// var exit = function(name) {
//   if (name.length > 5) {
//     return console.log("У вас имя слишком длинное");
//   }
//   return console.log(" Твое имя " + name + " , привет");
// };

// exit("alex");
// exit("alexander");

// ---- Многократное использование return вместо if... else ----

// var medalForScore = function(score) {
//   if (score < 3) {
//     return "Бронза";
//   }

//   if (score < 7) {
//     return "Серебро";
//   }

//   return "Золото";
// };

// console.log(medalForScore(2));

// в книге написано что есть два типа записи функций длинная и короткая

//  как нас учили длинная это expression (функция объявляется в каком - либо контексте)
//  а короткая declaration (классическое представление функции)

// Основное отличие между способами объявления функций в том,
// что Function Declaration создаются интерпретатором до
// выполнения кода (hoisting), а Function Expression создается
// в момент выполнения, то есть, когда интерпретатор до нее
// добирается. Фактически это значит, что функции, объявленные
// в основном потоке, можно вызывать до их определения,
// но функциональные выражения – строго после

// Как видите, при длинной записи мы явно создаем переменную и
// сохраняем в ней функцию, так что имя double записывается прежде
// ключевого слова function.Напротив, при короткой записи сначала
// идет ключевое слово function, а затем название функции.
// В этом случае JavaScript создает переменную double неявным
// образом.На техническом сленге длинная запись называется
// функциональным выражением, а короткая — объявлением функции.

// --------- Упражнения из книги -------------------

// var add = function(resultMult, b) {
//   return resultMult + b;
// };

// var multiply = function(c, d) {
//   return c * d;
// };

// var result = add(multiply(36325, 9824), 777);

// console.log(result);

