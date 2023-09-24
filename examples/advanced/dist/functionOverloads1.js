"use strict";
exports.__esModule = true;
function concatenate(strs, separator) {
    if (separator !== undefined) {
        return strs.join(separator);
    }
    else {
        return strs.join('');
    }
}
var names = ['Alice', 'Bob', 'Charlie'];
console.log(concatenate(names)); // Outputs: AliceBobCharlie
console.log(concatenate(names, ', ')); // Outputs: Alice, Bob, Charlie
// Тут функція concatenate перевантажена з двома різними сигнатурами. Перша приймає один аргумент — масив рядків, а друга приймає два аргументи — масив рядків та рядок-розділювач.
