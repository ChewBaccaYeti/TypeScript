"use strict";
exports.__esModule = true;
function greet() {
    return "Hello, world!";
}
var result = greet();
function greet() {
    return 100; // Error: Type 'number' is not assignable to type 'string'
}
var result = greet();
var greet = function () {
    return "Hello, world!";
};
var result = greet();
