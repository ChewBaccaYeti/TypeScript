"use strict";
exports.__esModule = true;
function doSomething(callback) {
    callback();
}
doSomething(function () {
    console.log('Callback function!');
});
