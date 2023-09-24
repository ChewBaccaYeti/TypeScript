"use strict";
exports.__esModule = true;
var getUserNames = function (users) {
    return users.map(function (user) { return user.name; });
};
var users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
var result = getUserNames(users);
console.log(result); // ['Alice', 'Bob', 'Charlie']
