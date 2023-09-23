"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "ACTIVE";
    UserStatus["Inactive"] = "INACTIVE";
    UserStatus["Banned"] = "BANNED";
})(UserStatus || (UserStatus = {}));
var status = UserStatus.Active;
module.exports = {};
