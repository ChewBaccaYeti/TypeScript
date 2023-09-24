// Якщо ми хочемо розширити один інтерфейс іншим, у яких різні імена, нам потрібно використовувати оператор extends:
interface Dog extends Animal {
    bark: string;
   }

// У випадку з типом нам довелося б використовувати intersection (&).   
   type AnimalName = {
    name: string;
  };
  
  type AnimalAge = {
    age: number;
  };
  
  type Animal = AnimalName & AnimalAge;
  
  let dog: Animal = {
    name: 'Fido',
    age: 5,
  };
  
  export {};