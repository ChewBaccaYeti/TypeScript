"use strict";
exports.__esModule = true;
function greet(name) {
    if (name) {
        return "Hello, " + name + "!";
    }
    else {
        return "Hello!";
    }
}
console.log(greet('Alice')); // Виводить: Hello, Alice!
console.log(greet()); // Виводить: Hello!
// У TypeScript ви можете зробити параметр опціональним, додавши символ ? після назви параметра. Це означає, що параметр може бути пропущений під час виклику функції.
