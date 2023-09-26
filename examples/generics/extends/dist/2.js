"use strict";
exports.__esModule = true;
function getLength(str) {
    return str.length;
}
getLength('text');
getLength([1, 2, 3]);
getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'
// Передаючи число в getLength, ми отримуємо помилку, оскільки у нього немає методу length.
