"use strict";
exports.__esModule = true;
// Це також корисно для створення класів, що працюють зі спеціалізованими типами. Наприклад, ми можемо визначити клас "KeyValuePair", який приймає два узагальнені типи:
// один для ключа та один для значення.
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.getKey = function () {
        return this.key;
    };
    KeyValuePair.prototype.getValue = function () {
        return this.value;
    };
    return KeyValuePair;
}());
var pair1 = new KeyValuePair('name', 'Alice');
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'
var pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true
// Таким чином, ми можемо використовувати один і той же клас, який буде працювати з різними типами.
