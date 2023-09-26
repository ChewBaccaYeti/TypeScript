"use strict";
// ReturnType<T>
exports.__esModule = true;
// Дозволяє отримати тип функції, що повертається. Для функцій він має використовуватися з typeof.
// Ось простий приклад:
function greeting() {
    return 'Hello, world!';
}
function multiply(a, b) {
    return a * b;
}
function createLoggedFunction(func) {
    var funcRef = func;
    var loggedFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Function " + func.name + " was called with arguments:", args);
        var result = funcRef.apply(void 0, args);
        return result;
    };
    return loggedFunction;
}
// Тепер loggedFunction приймає функцію як аргумент і повертає нову функцію, яка всередині себе викликає вихідну функцію.
// Тип вихідної функції, що повертається, зберігається завдяки використанню ReturnType<T>.
