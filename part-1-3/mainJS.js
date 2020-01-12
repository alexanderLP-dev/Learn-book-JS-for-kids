"use strict";

/* --------------- Раздел 1 знакомство с JS ----------------------- */

// Рисуем столько котиков, сколько захотим!
// var drawCats = function(howManyTimes) {
//   for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//   }
// };
// drawCats(10); // Вместо 10 тут может быть другое число

// drawCats --- название функции которую надо вызвать в конце
// function --- Функция которая выполнит то что нужно зделать
// howManyTimes --- аргумент (переменная ) которая укажет сколько раз выполнится функция
// то же самое что i < 10

/* ----------------  Раздел 2 ТИПЫ ДАННЫХ И ПЕРЕМЕННЫЕ ------------- */

// number ( (числа) 1, 2, 5, 10 и т.д )
// string ((строка) "Вася ", "10" , "undefined" и т.д)
// boolean((булевые значения истина или ложь) true , false)

// пишем в консоли :

// 99 * 123;
// 12177
// "Вот длинная строка".slice(0, 3);
// "Вот"
// true && false;
// false

/* ----------- переменные ---------------- */

/* undefined --- значение переменной не определено! */

// var userName;

// 1 )var age = 15;
//    console.log(age);

// 2 ) var string = 26;
//      console.log("string = " + string);
//      console.log("тип строки будет : " + typeof string);

// хоть переменная называется строка тип переменной будет number.

// var siblings = 2 + 1; // кол-во братьев , сестер
// var apples = 9; // кол-во яблок
// var howManyGet = apples / siblings; // делим кол-во яблок на кол-во братьев и сестер
// console.log(howManyGet); // выводим в консоль количество яблок каждому будет 3

/* reference error ---- это ошибка данных */

// var age = 32;
// var secondsInAMinute = 60;
// var minutesInAHour = 60;
// var hoursInDay = minutesInAHour * 0.4; // часы в сутках
// var day = hoursInDay / hoursInDay; // один день
// var daysInWeek = 7;
// var daysInYear = 365;

// var secondsInAHour = secondsInAMinute * minutesInAHour;
// var hoursInWeek = hoursInDay * daysInWeek;
// var secondsInADay = secondsInAHour * hoursInDay;
// var secondsInYear = secondsInADay * daysInYear;
// var mySeconds = age * secondsInYear;

// console.log(" часов в дне : " + hoursInDay); // часов в дне
// console.log(" 24 часа = " + day + " день"); // сутки
// console.log(" секунд в часе : " + secondsInAHour); // секунды в часе
// console.log(" часов в неделе : " + hoursInWeek); // часов в неделю
// console.log(" дней в Неделе : " + daysInWeek);
// console.log(" секунд в дне : " + secondsInADay);
// console.log(" секунд в году : " + secondsInYear);
// console.log(" мой возраст в секундах : " + mySeconds);

/* ----------- инкремент и декремент ------------ */

// просто тест на русский язык в JS )) bad practce

// var дайПять = 0;

// дайПять++;
// console.log(дайПять);

// дайПять++;
// console.log(дайПять);

// дайПять--;
// console.log(дайПять);

// дайПять = 1;

// ++дайПять;
// console.log(дайПять);

// ++дайПять;
// console.log(дайПять);

// --дайПять;
// console.log(дайПять);

// var x = 10;

// x = x + 5;
// console.log(x); // x = 15

// x += 10; // то же что  x = x( который равен уже 15) + 10; и т.д.
// console.log(x); // x = 25

// x -= 5;
// console.log(x); // x = 20

// x *= 2;
// console.log(x); // x = 40

// x /= 2;
// console.log(x); // x = 20

/* ----------------- Строки ---------------- */

// var numberNine = 9; // тип данных number(число)
// console.log(
//   typeof numberNine + " " + numberNine + " Это тип данных number(число)  "
// );
// var stringNine = "9"; // тип данных string(строка)
// console.log(
//   typeof stringNine + " " + stringNine + " Это тип данных string(строка)  "
// );

// numberNine += 9; // сложит два числа в итоге будет 18
// console.log(numberNine);

// stringNine += 9; // сложит две строки в итоге будет 99
// console.log(stringNine);

// var greeting = "Здравствуй! "; // пробелы учитываются при сложении
// var myName = "Мой Господин.";

// var result = greeting + myName; // выполнит Здравствуй! Мой Господин.
// console.log(result);

// /*------------ длина строки ----------- */

// var testString = "mom washed the frame";
// var lengthTestString = testString.length; // пробелы идут в счет тоже

// console.log(lengthTestString); // 20 mom washed the frame(мама мыла раму)

// var java = "Java";
// console.log(java.length); // добавляя .length мы выводим длину строки = 4

// var script = "Script";
// console.log(script.length); // добавляя .length мы выводим длину строки = 6

// var javascript = java + script; // складываем СТРОКИ
// console.log(javascript.length); // выполняется вывод длины уже сложенных строк = 10

/*------------ получение отдельного символа в строке ------------- */

//  Кодовое слово

// var codeWord1 = "пар";
// var codeWord2 = "фанера";
// var codeWord3 = "живот";
// var codeWord4 = "инфо";
// var codeWord5 = "река";

// // первый символ = [0]
// var allWord = // выбираем по одной букве из переменных
//   codeWord3[0] + codeWord4[0] + codeWord2[4] + codeWord1[1] + codeWord2[0];
// console.log(allWord);

// срез строки .slice

// var sliceString = "телевизор";
// var sliceString2 = "мегафон";
// // var allSlicing = sliceString.slice(0, 4); // (позиция первого символа, позиция символа по который + 1 )
// // var allSlicing2 = sliceString2.slice(4, 7); // .slice возвращает "вырезанные куски"
// var allSlicingWord = sliceString.slice(0, 4) + sliceString2.slice(4, 7);

// //если в скобках указать одну цифру , то будет срез от этой позиции до конца строки!

// console.log(sliceString);
// console.log(sliceString2);
// console.log(allSlicingWord + ' - "вырезанные куски" из двух строк выше');

// ------------ Заглавный ,строчный регистр букв ----------------

// .toUpperCase() - верхний регистр

// var testString = "сегодня был снег";
// var testString2 = upper;

// var upper = testString.toUpperCase();
// var testString2 = upper;

// // .toLowerCase()  - нижний регистр

// var lower = testString2.toLowerCase();
// console.log(upper, lower);

// мое решение

// var someWrongString = "jaVasCRipT"; // задаем строку
// var allLower = someWrongString.toLowerCase(); // переводим всю строку в маленькие буквы
// var slicedWord = allLower.slice(0, 1).toUpperCase(); // делаем первую букву (j) заглавной
// var slicedWord2 = allLower.slice(4, 5).toUpperCase(); // делаем пятую букву (s) заглавной
// var firstSlicing = allLower.slice(1, 4); // вырезаем кусок (ava) уже в мал регистре
// var secondSlicing = allLower.slice(5); // вырезаем кусок от пятого символа до конца строки

// var allSlicedWord = slicedWord + firstSlicing + slicedWord2 + secondSlicing;
// // склеиваем(конкатенируем) все до кучи
// console.log(allSlicedWord); // выводим результат = JavaScript

// решение из учебника при условии только одной заглавной букве в начале

// var sillyString = "эЙ, кАК деЛа?"; // задаем строку
// var lowerString = sillyString.toLowerCase(); // переводим все в нижний регистр
// var firstCharacter = lowerString[0]; // берем первый символ строки [0]
// var firstCharacterUpper = firstCharacter.toUpperCase(); // переводим первый символ строки в в.регистр
// var restOfString = lowerString.slice(1); // получаем кусок остальной строки от 2 символа
// var res = firstCharacterUpper + restOfString; // склеиваем(конкатенируем) до кучи

// console.log(res); // выводим результат

/* ---------------- булевы значения (boolean) ----------------- */

// && " амперсанд - амперсанд ( И-И )"

// var javaScriptIsCool = true;
// console.log(" JavaScript is cool? Yes! It`s " + javaScriptIsCool);

// var hasFamily = true;
// var hasCar = false;
// var result = hasFamily && hasCar; // спрашиваем оба ли значения равны true

// // так как hasCar = false в результате будет лежать false
// // если оба значения true то результат будет true

// console.log(" есть семья И машина? " + result);

// // || называется " пайпс" (с англ. трубы)

// var hasCandy = false;
// var hasPotato = true;
// var result2 = hasCandy || hasPotato;

// // так как одно из сравниваемых значений истинно(true) результат = true

// console.log(" есть конфеты ИЛИ картошка? " + result2);

// // !  " называется НЕ " меняет true на false и наоборот

// var result3 = hasFamily && !hasCar;
// console.log(" есть семья И машина? " + result3); // даст true т.к. hasCar переменили оператором "НЕ" на true

/* ---------------- Сравнение чисел --------------------  */

// var width = 90;
// var normWidth = 90;

// var equals = width >= normWidth; //true
// console.log(equals);

// var zero = null;
// var resultTrue = zero >= 0; // true
// console.log(resultTrue);

// var num = 5;
// console.log(" Загаданное число : " + num);
// var numIvan = 6;
// var resNumIvan = numIvan == num;
// console.log(" Иван называет число : " + numIvan + ".Результат = " + resNumIvan);
// var numPetro = 3;
// var resNumPetro = numPetro == num;
// console.log(
//   " Петро называет число : " + numPetro + ".Результат = " + resNumPetro
// );
// var numAlex = 5;
// var resNumAlex = numAlex == num;
// console.log(
//   " Алекс называет число : " + numAlex + ".Результат = " + resNumAlex
// );

// var stringNumber = "5";
// var number = 5;

// var result1 = stringNumber == number; // true
// var result2 = stringNumber === number; // false потому что оператор сравнивает и типы тоже

// console.log(result1);
// console.log(result2);

// ------ задача с кинотеатром ----------------

// var normAge = 12;
// var age = 11;
// var accompanied = true;

// var entry = age >= normAge || accompanied == true;

// console.log(" Можно ли заходить? " + entry);

// var undefinedVariable;
// console.log(undefinedVariable); // будет undefined т.к. JS в переменная не назначена и ее не находит JS

// var nullVariable = null;
// console.log(nullVariable); // покажет именно null и подразумевает что переменная пустая но она назначена

// null нужен чтобы явно показать что переменная есть но пустая,
// undefined может сбить с толку про переменную что забыли назначить.

//  Значения же null и undeﬁ ned дают нам способ обозначать то, чего не существует

/* ------------------- Раздел 3 Массивы -------------- */

// var myClothes = ["Джинсы", "Рубашка", "Кроссовки"];
// console.log(myClothes);

// первый элемент в массиве находится под индексом [0]

// var lessons = [
//   "Информатика",
//   "Математика",
//   "Укр.яз",
//   "Литература",
//   "Англ.яз",
//   "Физика",
//   "Химия",
//   "Алгебра",
//   "Геометрия",
//   "Биология",
//   ["ОБЖ", "Природа", "Труды"],
//   "История"
// ];

// lessons[6] = "Физ-ра"; // добавляет еще один элемент в конец массива
// lessons[5] = "Заруб.лит"; // заменяет элемент по индексу возвращая весь массив уже по новому

// // если задать lesson[40] то добавится 40 элемент , а между последним и 40-м элементом будут заполнены значением undefined

// console.log(lessons);
// console.log(lessons[3], lessons[1], lessons[6]);

// // в массиве могут быть не только строки а любые типы
// // можно обращаться  и к элементам вложенных массивов добавив еще одни скобки с индексом

// console.log(lessons[10][1]); // покажет в консоли "Природа" из вложенного массива

// ------------- Свойства и методы массива -----------

// длина массива массив.length - покажет длину массива сколько в нем элементов

// var cars = ["Жигули", "Запорожец", "Москвич"];

// console.log(cars);
// console.log(cars.length);
// console.log(cars[cars.length - 1]);

// // таким образом можно получить последний элемент массива какой бы длины он ни был
// // JS вычесляет длину массива отнимает 1 в итоге получая индекс последнего элемента и выводит его куда задано

// // массив.push() - добавляет в конец массива нужный нам элемент
// // в скобках пишем название элемента

// cars.push("BMW");
// cars.push("Ford");

// console.log(cars);

// // массив.unshift() - добавляет элемент в начало массива

// cars.unshift("Bentley");
// cars.unshift("Maseratti");

// console.log(cars);

// // длина массива меняется и естественно Жигули раньше было [0] теперь [2]

// // массив.pop() - удаляет последний элемент массива и возвращает этот же удаленный элемент, меняет длину массива с которого удалили его
// // так что создаем для него переменную

// var delCars = cars.pop(); // вырезает последний элемент "Ford" и сохраняет его в переменную для дальнейшего использования

// console.log(cars); // показывает массив  без последнего элемента
// console.log(delCars); // показывает сохраненный в переменную элемент массива

// cars.unshift(delCars); // добавляет последний элеиент в начало массива
// console.log(cars); // показывает массив с добавленным эдементом в начало

// var delElementCars = cars.pop(); // вырезает и сохраняем в переменную последний элемент уже "BMW"
// cars.unshift(delElementCars); // добавляет элемент в начало массива

// console.log(cars); // показывает уже переделанный массив

// var remakeArrayCars = cars;

// console.log(remakeArrayCars);

// //  массив.shift() - вырезает первый элемент массива и возвращает его же

// var delFirstElement = cars.shift(); // вырезает первый элемент сейчас "BMW", сохраняем в переменную
// console.log(delFirstElement); // показываем элемент сохраненный в переменную
// cars.push(delFirstElement); // добавляем элемент в конец массива
// console.log(remakeArrayCars); // и даже работая со ссылкой на массив показывает его измененным
// console.log(cars);

// --------------- Объединение массивов -----------

// массив.concat(нужный для объединения массив) - массив который в скобках "приклеится" в один массив с конца первого
// можно объединять много массивов разделив их запятой в скобках
// var firstArrayBrand = ["Sony", "Panasonic", "Aiwa"];
// var secondArrayShop = ["Rozetka", "Allo", "Eldorado"];
// var thirdArrayPhone = ["Xiaomi", "Samsung", "Nokia"];

// console.log(firstArrayBrand);
// console.log(secondArrayShop);
// console.log(thirdArrayPhone);

// var union = firstArrayBrand.concat(thirdArrayPhone, secondArrayShop);
// console.log(union);

// второй массив "приклеился" к концу массива т.к. указан последним в скобках метода concat
// после объединения массивов первоначальные массивы остаются прежними

// -------------- Поиск индекса элемента в массиве ---------

// массив.indexOf("элемент") - чтобы выяснить какой индекс у определенного элемента

// var hero = [];

// hero[0] = "Joker"; // элемент попадает между двух методов и имеет индекс [3]
// hero.push("Незнайка", "Бэтман", "Человек паук");
// hero.unshift("Cpt.america", "Hulk", "Lady Cat");

// var indexArrayHero = hero.indexOf("Hulk"); // в переменной будет лежать уже number индекса элемента
// var undefinedIndex = hero.indexOf("Крокодил Гена"); //вернет -1

// hero.push(indexArrayHero); // добавит в конец массива 1

// // если элемент в массиве запрашиваемый .indexOf повторяется то вернет ближайший индекс к началу массива

// console.log(typeof indexArrayHero); // number
// console.log(indexArrayHero); // 1
// console.log(hero, hero[3], hero[0], hero[hero.length - 1], undefinedIndex);

// // ---------- превращенике массива в строку --------------

// // .join() - в скобках стоит указать разделитель в кавычках "" который будет разделять элементы в массиве
// // если в массиве лежат не строковые значения то .join() преобразует их в строковые
// var arrayHeroString = hero.join(" || ");

// console.log(arrayHeroString);

// ----------- способ работы стек --------------

// способ: последний вошел , первый вышел (LIFO(last in first out))

// var landmsrksToWork = [];

// landmsrksToWork.push("идем на остановку");
// landmsrksToWork.push("тролейбус 3");
// landmsrksToWork.push("метро ХТЗ");
// landmsrksToWork.push("метро Малышева");
// landmsrksToWork.push("проходная");
// landmsrksToWork.push("раздевалка");
// landmsrksToWork.push("рабочее место");

// console.log(landmsrksToWork);

// landmsrksToWork.pop("рабочее место");
// landmsrksToWork.pop("раздевалка");
// landmsrksToWork.pop("проходная");
// landmsrksToWork.pop("метро Малышева");
// landmsrksToWork.pop("метро ХТЗ");
// landmsrksToWork.pop("тролейбус 3");
// landmsrksToWork.pop("идем на остановку");

// console.log(landmsrksToWork);

// // есть еще альтернативный способ : первый вошел первый вышел(FIFO (first in first out))
// // предположение что используется .shift()

// var repka = [];

// repka.push("Репка");
// repka.push("Дед");
// repka.push("Бабка");
// repka.push("Внучка");
// repka.push("Жучка");
// repka.push("Кошка");
// repka.push("Мышка");

// console.log(repka);

// repka.shift("Репка");
// repka.shift("Дед");
// repka.shift("Бабка");
// repka.shift("Внучка");
// repka.shift("Жучка");
// repka.shift("Кошка");
// repka.shift("Мышка");

// console.log(repka);

// --------------- Случайный выбор ------------

// спец. метод Math.random() - при каждом вызове возвращает случайное число от 0 до 1

// var yesNo = [];

// yesNo.push("Да");
// yesNo.push("Может быть");
// yesNo.push("Нет");

// console.log(yesNo);

// var random = Math.floor(Math.random() * yesNo.length);
// console.log(yesNo[random]);

// var who = ["Сын", "Мама", "Папа"];
// var doit = ["Моет", "Играет", "Отдыхает"];
// var what = ["Пол", "Посуду", "На диване"];

// var randomWho = who[Math.floor(Math.random() * who.length)];
// var randomDoit = doit[Math.floor(Math.random() * doit.length)];
// var randomWhat = what[Math.floor(Math.random() * what.length)];

// console.log(randomWho + " " + randomDoit + " " + randomWhat);

// --------------------- из книги ------------------

// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// // Выбор случайной части тела из массива randomBodyParts:
// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// // Выбор случайного прилагательного из массива randomAdjectives:
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// // Выбор случайного слова из массива randomWords:
// var randomWord = randomWords[Math.floor(Math.random() * 5)];
// // Соединяем случайные строки в предложение:
// var randomInsult =
//   "У тебя " +
//   randomBodyPart +
//   " словно " +
//   randomAdjective +
//   " " +
//   randomWord +
//   "!!!";
// console.log(randomInsult);

// var randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");

// console.log(randomInsult);

// "У тебя череп словно дурацкая дубина!!!"

