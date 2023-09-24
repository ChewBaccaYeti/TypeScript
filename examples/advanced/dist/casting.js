"use strict";
// Type Casting (або Type Conversion) використовується для перетворення об'єкта одного типу на об'єкт іншого типу.
exports.__esModule = true;
// TypeScript використовує два синтаксичні підходи для типового приведення: кутові дужки <> та оператор as.
var someValue = 'this is a string';
var strLength1 = someValue.length;
// or
var strLength2 = someValue.length;
var strLength3 = someValue.length;
// Інтерпретація HTML елементу
var input = document.getElementById('inputEmail');
input.value = 'test@test.ts';
// І є другий, більш універсальний через as.
var input = document.getElementById('inputEmail');
input.value = 'test@test.ts';
// Таким чином, ви можете змінювати або призначати тип у процесі виконання коду. Спробуємо видалити його зараз і призначити пізніше.
var input = document.getElementById('inputEmail');
if (input) {
    input.value = 'test@test.ts';
}
