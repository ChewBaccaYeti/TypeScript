"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        console.log('The animal walks...');
    };
    Animal.prototype.eat = function () {
        console.log('The animal eats...');
    };
    return Animal;
}());
var animal = new Animal();
var add;
add = function (n1, n2) {
    return n1 + n2;
};
// Але, це не дуже зручно і складно виглядає, краще в таких випадках використовувати type.
