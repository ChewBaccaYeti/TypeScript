"use strict";
exports.__esModule = true;
var users = {};
var user = {
    id: '1',
    name: 'Alex',
    email: 'alex@example.com'
};
users[user.id] = user;
// У цьому прикладі ми визначили тип Users, який містить об'єкти типу User.
// Потім ми створили об'єкт users, який може містити невідому кількість користувачів, кожен з яких може бути доступний за його id.
