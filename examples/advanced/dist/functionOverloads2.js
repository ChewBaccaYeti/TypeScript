"use strict";
exports.__esModule = true;
function checkUser(name, type, privilegesOrRegistrationDate) {
    if (type === 'admin') {
        return {
            type: type,
            name: name,
            privileges: privilegesOrRegistrationDate
        };
    }
    return {
        type: type,
        name: name,
        registrationDate: new Date()
    };
}
var user = checkUser('Nikita', 'user');
var admin = checkUser('Tonya', 'admin', ['manageUsers', 'deletePosts']);
