// keyof — це оператор у TypeScript, що повертає типізований набір ключів для заданого типу. Іншими словами, він повертає тип, який представляє всі можливі ключі цього типу.

// Візьмемо, наприклад, наступний тип:
type Person = {
  name: string;
  age: number;
  location: string;
};

// Якщо ми використовуємо keyof з цим типом, то отримаємо тип, що представляє всі можливі ключі цього типу:
type PersonKeys = keyof Person; // 'name' | 'age' | 'location'
// Тепер PersonKeys представляє будь-який ключ з Person. Це може бути корисним у функціях, що приймають об'єкт типу Person і ключ цього об'єкта:
type Person = {
    name: string;
    age: number;
    location: string;
  };
  
  type PersonKeys = keyof Person; // 'name' | 'age' | 'location'
  
  function getPersonInfo(person: Person, key: PersonKeys) {
    return person[key];
  }
  
  const john: Person = {
    name: 'John',
    age: 25,
    location: 'NY',
  };
  
  console.log(getPersonInfo(john, 'age')); // 25
  console.log(getPersonInfo(john, 'name')); // 'John'
  console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.
  
  export {};
// У цьому прикладі getPersonInfo може приймати лише ключі, допустимі для Person. Якби ми спробували передати ключ, якого немає в Person, TypeScript видав би помилку.