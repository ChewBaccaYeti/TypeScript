"use strict";
exports.__esModule = true;
var merged = merge({ name: 'Alisa' }, 'TEXT'); // {0: 'T', 1: 'E', 2: 'X', 3: 'T', name: 'Alisa'}
// Ми передали другим аргументом рядок ‘TEXT’ і у нас вийде дивний результат. Ми можемо обмежити тип, використовуючи extends. 
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merge({ name: 'Alisa' }, 'TEXT');
merged.name;
// Ми зробили:
T;
object, U;
object;
// Це дає нам обмеження, що T та U мають бути об'єктами.
