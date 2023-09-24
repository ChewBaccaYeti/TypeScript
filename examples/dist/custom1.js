"use strict";
exports.__esModule = true;
var AnimalIds;
(function (AnimalIds) {
    AnimalIds["cat"] = "cat";
    AnimalIds["dog"] = "dog";
    AnimalIds["fish"] = "fish";
})(AnimalIds || (AnimalIds = {}));
// Створення об'єктів типу Animal
var cat = {
    meow: function () { return 'Meow! I am a cat'; }
};
var dog = {
    bark: function () { return 'Woof! I am a dog'; }
};
var fish = {
    swim: function () { return undefined; }
};
