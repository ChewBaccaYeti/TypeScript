"use strict";
// Зазвичай у строго типізованих мовах є перевантаження операторів, коли залежно від типу або кількості вхідних параметрів повертається різний результат і різні типи даних.
// У цих мовах це зазвичай реалізується через функції з різною реалізацією, але з тим самим ім'ям.
// У випадку з TypeScript це швидше прийом, що дозволяє повернути інший тип даних, залежно від вхідних параметрів.
exports.__esModule = true;
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else if (typeof input1 === 'number' && typeof input2 === 'string') {
        return input1 + input2;
    }
}
console.log(combine(1, 2)); // Outputs: 3
console.log(combine('Hello', 'World')); // Outputs: HelloWorld
console.log(combine('Hello', 2)); // Outputs: Hello2
console.log(combine(1, 'World')); // Outputs: 1World
// Тут функція combine перевантажена з чотирма різними сигнатурами функцій.
// Перевантажена функція дозволяє нам визначити різну поведінку функції залежно від типу та кількості переданих у неї аргументів.
// А також повернути різні типи залежно від вхідних параметрів.
