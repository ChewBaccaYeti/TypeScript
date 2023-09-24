// Більш зрозумілим прикладом з типами користувача буде наступний:
// ми перевіряємо користувача і створюємо об'єкти різних типів, залежно від того, чи є користувач адміном або звичайним користувачем.
type AdminType = {
    type: 'admin';
    name: string;
    privileges: string[];
  };
  
  type UserType = {
    type: 'user';
    name: string;
    registrationDate: Date;
  };
  
  function checkUser(name: string, type: 'user'): UserType;
  function checkUser(
    name: string,
    type: 'admin',
    privileges: string[]
  ): AdminType;
  function checkUser(
    name: string,
    type: 'admin' | 'user',
    privilegesOrRegistrationDate?: string[]
  ): AdminType | UserType {
    if (type === 'admin') {
      return {
        type,
        name,
        privileges: privilegesOrRegistrationDate as string[],
      };
    }
  
    return {
      type,
      name,
      registrationDate: new Date(),
    };
  }
  
  const user = checkUser('Nikita', 'user');
  const admin = checkUser('Tonya', 'admin', ['manageUsers', 'deletePosts']);
  
  export {};
  