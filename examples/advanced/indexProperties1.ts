// Використання індексних властивостей дозволяє вам створювати словники або карти, де ключі та значення мають певний тип.
type User = {
    id: string;
    name: string;
    email: string;
  };
  
  type Users = {
    [id: string]: User;
  };
  
  let users: Users = {};
  
  let user: User = {
    id: '1',
    name: 'Alex',
    email: 'alex@example.com',
  };
  
  users[user.id] = user;
  
  export {};
// У цьому прикладі ми визначили тип Users, який містить об'єкти типу User.
// Потім ми створили об'єкт users, який може містити невідому кількість користувачів, кожен з яких може бути доступний за його id.