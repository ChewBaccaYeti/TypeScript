"use strict";
exports.__esModule = true;
var pet;
// type guard function
function isDog(pet) {
    return 'bark' in pet;
}
// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet)) {
    pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
}
else {
    pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}
