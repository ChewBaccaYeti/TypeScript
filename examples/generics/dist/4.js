"use strict";
exports.__esModule = true;
// Давайте розглянемо хрестоматійний приклад – поєднання двох об'єктів.
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged;
var merged = merge({ name: 'Alisa' }, { age: 28 });
merged.name;
// Ми передали два типи T та U, що будуть застосовані до аргументів функції, і тепер у нас немає помилки. Ми отримуємо об'єднаний тип.
