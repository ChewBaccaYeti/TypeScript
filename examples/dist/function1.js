"use strict";
exports.__esModule = true;
// Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
// Приклади використання calc з різними функціями зворотного виклику
calc(1, 1, function (num1, num2) { return num1 + num2; });
calc(10, 5, function (num1, num2) { return num1 - num2; });
