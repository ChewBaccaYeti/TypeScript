"use strict";
exports.__esModule = true;
// Пам'ятаєте, ми створювали тип кортежу? Але метод 'push' все одно працював. Так ось, використовуючи Readonly, можна створити дійсно незмінний масив.
var arr = ['One', 'Two', 'Three'];
arr.push('Four'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// Тепер цей масив не можна модифікувати жодним чином.
