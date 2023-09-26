"use strict";
// Ми також можемо передавати типи під час виклику функції.
exports.__esModule = true;
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var merged = merge({ name: 'Alisa' }, { age: 28 });
merged.name;
