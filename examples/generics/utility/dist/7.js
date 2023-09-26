"use strict";
var _a;
exports.__esModule = true;
// Record часто використовується для мапінгів, перекладів та інших ситуацій, коли вам потрібно створити об'єкт із заздалегідь відомими ключами.
// Ми можемо використовувати enum для цього. Давайте визначимо enum для наших ролей:
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["manager"] = "manager";
    UserRoles["employee"] = "manager";
})(UserRoles || (UserRoles = {}));
var userRoleStatuses = (_a = {},
    _a[UserRoles.admin] = true,
    _a[UserRoles.manager] = false,
    _a[UserRoles.employee] = true,
    _a);
// Тут UserRoles — це перерахування, що визначає можливі ролі користувача.
// UserRolesStatuses — це тип, що представляє запис, де кожна роль користувача зіставлена з булевим значенням, що вказує на активацію цієї ролі.
