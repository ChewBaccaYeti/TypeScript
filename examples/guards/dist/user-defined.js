"use strict";
// Подивимося на User-Defined — це потужний механізм у TypeScript, що дозволяє створювати власні функції для перевірки типів.
// Це особливо корисно, коли ми працюємо з поєднанням типів (Union Types).
exports.__esModule = true;
function isDog(animal) {
    return 'bark' in animal;
}
function letAnimalTalk(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
function isEmployee(staff) {
    return staff.startDate !== undefined;
}
var staffMember = { name: 'Bob', startDate: new Date() };
if (isEmployee(staffMember)) {
    console.log("Welcome on board, " + staffMember.name + "! Your start date is " + staffMember.startDate);
}
// У цьому прикладі ми використали as, щоб привести staff до типу Employee і тим самим перевірити чи є в ньому startDate.
