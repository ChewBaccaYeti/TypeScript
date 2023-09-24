type Admin = {
    name: string;
    privileges: string[];
  };
  
  type Employee = {
    name: string;
    startDate: Date;
  };
  
  type AdminOrEmployee = Admin | Employee;
  
  function printDetails(obj: AdminOrEmployee) {
    console.log(`Name: ${obj.name}`);
  
    if ('privileges' in obj) {
      console.log(`Privileges: ${obj.privileges.join(', ')}`);
    }
  
    if ('startDate' in obj) {
      console.log(`Start Date: ${obj.startDate}`);
    }
  }
  
  export {};
// Оператор 'in' дозволяє перевірити наявність властивості в об'єкті. Це особливо корисно, коли ми працюємо з поєднанням типів. Ми перевіряємо, чи містить obj поле 'privileges'.
// Якщо так, то значить це admin, і ми можемо з ним працювати.
// Зверніть увагу, що ми гарантуємо, що поле 'name' є в обох типах, тому ми можемо його виводити без додаткових перевірок.