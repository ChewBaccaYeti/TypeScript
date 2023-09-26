"use strict";
// keyof — це оператор у TypeScript, що повертає типізований набір ключів для заданого типу. Іншими словами, він повертає тип, який представляє всі можливі ключі цього типу.
exports.__esModule = true;
function getPersonInfo(person, key) {
    return person[key];
}
var john = {
    name: 'John',
    age: 25,
    location: 'NY'
};
console.log(getPersonInfo(john, 'age')); // 25
console.log(getPersonInfo(john, 'name')); // 'John'
console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.
// У цьому прикладі getPersonInfo може приймати лише ключі, допустимі для Person. Якби ми спробували передати ключ, якого немає в Person, TypeScript видав би помилку.
