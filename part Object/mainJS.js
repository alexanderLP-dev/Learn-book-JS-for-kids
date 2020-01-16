"use strict";

// -------------- Объекты -------------

// Внутри фигурных скобок можно вводить пары «ключ-значение», а вместе скобки и пары значений называются литералом объекта.
// Литерал объекта — это быстрый способ создания объекта вместе с его содержимым.
// Литерал — это когда значение записывается сразу и целиком, а не составляется постепенно, шаг за шагом

// var player = {
//   health: 100,
//   power: 10,
//   name: "Dave",
//   rifle: true
// };

// console.log(player);
// console.log(player["power"]);
// console.log(player.rifle); // такой способ называется точечная нотация
// console.log(player.name); // подходит если значение не имеет спец символов типа пробел
// console.log(player["health"]);
// console.log(Object.keys(player)); // возвращает массив всех ключей объекта

// // ------------------ добавление элементов объекта -------

// var enemy = {};

// enemy.health = 200;
// enemy["name"] = "Bob";
// enemy["power"] = 5;
// enemy.rifle = true;

// console.log(enemy);
// console.log(enemy.health);
// console.log(enemy["name"]);
// console.log(enemy.power);
// console.log(enemy["rifle"]);
// console.log(Object.keys(enemy));

// // в отличии от массивов ключи в объектах хранятся без какой то очереди и могут в разных браузерах отображатся по разному

// var superBoss = {};

// superBoss.health = 1000;
// superBoss["name"] = "Robo";
// superBoss["power"] = 50;
// superBoss.rifle = true;

// console.log(superBoss);
// console.log(superBoss["mega power"]); // undefined
// // если обратиться к несуществующему свойству то нам покажет undefined

// ---------------- массивы объектов ------------

// var year = [
//   { season: "winter", temperature: "cold" },
//   { season: "spring", month: 3 },
//   { season: "summer", vacation: true },
//   { season: "autumn", color: "gold" }
// ];

// чтобы обратиться к объекту применяем обращение массивов
// Точечную нотацию можно использовать только с объектами, для массивов она не подходит.

// console.log(year);
// console.log(year[3]["season"]);
// console.log(year[2].vacation);

// var city = {
//   place: "center",
//   numBus: [3, 6, 25]
// };

// var village = {
//   place: "city",
//   bus: [123, 204, 36]
// };

// var otherCity = {
//   place: village,
//   airBus: ["Via trans", "MAU"],
//   otherPlace: city
// };

// var map = [city, village, otherCity];
// var x = map[1].bus;
// console.dir(otherCity);
// console.dir(map);
// console.log(map[2].otherPlace.numBus);

// -------------- просто практика -------------

// var someArray = [];
// var some = [];
// var need = "получили число : ";

// someArray[2] = some;
// someArray.push(4);
// someArray.push(1);

// some.push(5);
// some.push(10);
// some.unshift(3);
// some.push(need);

// var other = {
//   first: 2,
//   second: 5,
//   third: someArray
// };

// var earnings = {};

// earnings.june = 10;
// earnings["july"] = 11;
// earnings.august = [5, other, 4];

// var earningsMany = earnings.august[1].third[2][some.length - 1];
// var all = earningsMany + (earnings["july"] + earnings.august[1].third[2][1]);

// console.dir(earnings);
// console.log(all);

// --------------- Список должников ---------------------------

// var debtors = {};

// debtors.Mike = 10;
// debtors.Angela = 5;
// debtors["Svetlana"] = 100;

// debtors.Angela += 10;

// console.log(debtors.Angela); // покажет 15 т.к. добавили 10

// debtors.Mike -= 7;

// console.log(debtors["Mike"]); // покажет 3 т.к. отняли 7

// console.log(debtors);

// ------------- сведения о чем либо -----------------

// var factory = {
//   механики: {
//     "Степан Иваныч": {
//       old: "11 june 1980",
//       experience: 10,
//       salary: 10000,
//       family: ["wife", "son", "daughter"]
//     },
//     "Иван Кузьмич": {
//       old: "28 september 1978",
//       experience: 12,
//       salary: 12000,
//       family: ["Wife", "daughter"],
//       awards: "Ветеран труда"
//     },
//     "Петр Михалыч": {
//       old: "2 february 1990",
//       experience: 5,
//       salary: 9000,
//       family: {
//         wife: {
//           old: "21 october 1979",
//           name: "Вера Василиевна",
//           phone: 123456789
//         },
//         son: {
//           old: 2,
//           name: "Денис"
//         }
//       }
//     }
//   },
//   крановщики: {
//     "Лидия Василиевна": {
//       old: "12 march 1986",
//       experience: 8,
//       salary: 10000,
//       family: ["husband", "son", "son"]
//     },
//     "Вера Павловна": {
//       old: "10 april 1992",
//       experience: 4,
//       salary: 9000,
//       family: ["husband"]
//     }
//   }
// };

// var newWorking = {
//   "Майк Кенцлов": {
//     old: "18 november 1989",
//     experience: 0,
//     salary: 8000,
//     family: ["wife"]
//   }
// };

// var ivan = factory.механики["Иван Кузьмич"];
// var lidiya = factory.крановщики["Лидия Васильевна"];
// var petr = factory.механики["Петр Михалыч"];
// var vera = factory.крановщики["Вера Павловна"];
// var mike = newWorking;

// factory.механики["Майк Кенцлов"] = newWorking;

// ivan.name = "Иван";
// petr.name = "Петр";
// vera.name = "Вера";

// vera.family.unshift("brother");

// ivan.phone = 987654321;
// ivan.family.push("son");
// ivan.family.push("sister");

// petr.family.son2 = {};
// petr.family.son2.old = 1;
// petr.family.son2.name = "Вася";

// console.log(Object.keys(factory.механики));
// console.log(Object.keys(factory.крановщики));

// console.log(petr);
// console.log(ivan);
// console.log(vera);
// console.log(mike);

// --------------- упражнения из книги --------------

// var scores = {
//   kolya: 0,
//   tanya: 0,
//   masha: 0
// };

// scores.kolya += 5;
// scores.tanya += 2;
// scores.masha += 3;

// console.log(scores);

// -------------- упражнениие 2 ------------

// Как одной строкой JavaScript-кода
// извлечь из этого объекта число 123?
// Проверьте свое решение, запустив его в консоли

// var myCrazyObject = {
//   name: "Нелепый объект",
//   "some array": [
//     7,
//     9,
//     {
//       purpose: "путаница",
//       number: 123
//     },
//     3.3
//   ],
//   "random animal": "Банановая акула"
// };

// console.log(myCrazyObject["some array"][2].number);

