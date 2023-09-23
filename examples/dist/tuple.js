"use strict";
exports.__esModule = true;
var tupleType;
tupleType = ['hello', true]; // OK
tupleType = [true, 'hello']; // Error. Неправильні типи
tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple
