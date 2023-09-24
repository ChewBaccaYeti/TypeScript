"use strict";
exports.__esModule = true;
function combine(a, b) {
    return a + b;
}
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
