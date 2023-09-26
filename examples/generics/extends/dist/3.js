"use strict";
exports.__esModule = true;
// Ще одним прикладом використання extends може бути функція, що приймає масив елементів певного типу:
function arrayLogger(array) {
    array.forEach(function (item) { return console.log(item); });
}
arrayLogger(['Hello', 'World']); // Ok
arrayLogger([1, 2, 3]); // Error
// У цьому випадку T extends Array<string> означає, що параметр функції має бути масивом рядків.
