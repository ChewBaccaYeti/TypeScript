// Record часто використовується для мапінгів, перекладів та інших ситуацій, коли вам потрібно створити об'єкт із заздалегідь відомими ключами.
// Ми можемо використовувати enum для цього. Давайте визначимо enum для наших ролей:
enum UserRoles {
    admin = 'admin',
    manager = 'manager',
    employee = 'manager',
  }
  
  type UserRolesStatuses = Record<UserRoles, boolean>;
  
  const userRoleStatuses: UserRolesStatuses = {
    [UserRoles.admin]: true,
    [UserRoles.manager]: false,
    [UserRoles.employee]: true,
  };
  
  export {};
// Тут UserRoles — це перерахування, що визначає можливі ролі користувача.
// UserRolesStatuses — це тип, що представляє запис, де кожна роль користувача зіставлена з булевим значенням, що вказує на активацію цієї ролі.