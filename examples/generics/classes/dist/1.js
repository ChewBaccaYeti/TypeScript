"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// Узагальнені класи в TypeScript дозволяють визначити клас з типами, що можуть бути встановлені під час створення екземпляра класу.
// Це дозволяє створювати класи, що можуть працювати з різними типами даних, зберігаючи водночас сувору типізацію.
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArrays(this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Hello');
textStorage.addItem('World');
console.log(textStorage.getItems()); // ['Hello', 'World']
textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
var numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems()); // [1, 2]
numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'
// У цьому прикладі клас "DataStorage" має узагальнений тип "T", який визначається під час створення екземпляра класу.
// В результаті ми отримуємо універсальний клас для зберігання даних, що може працювати з рядками, числами або будь-якими іншими типами, які ми визначимо.
