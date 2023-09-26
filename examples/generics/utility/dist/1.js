"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function createUser(data) {
    // Деякі значення за замовчуванням:
    var defaultUser = {
        id: Date.now(),
        name: '',
        email: '',
        registered: false
    };
    // З'єднуємо дані користувача та значення за замовчуванням
    return __assign(__assign({}, defaultUser), data);
}
var newUser = createUser({ name: 'Alice', email: 'alice@example.com' });
console.log(newUser);
// У цьому прикладі Partial<User> дозволяє нам створювати користувачів, надаючи лише дані, які відомі на момент створення. Значення за замовчуванням використовуються для інших полів.
