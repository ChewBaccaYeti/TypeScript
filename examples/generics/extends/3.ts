// Ще одним прикладом використання extends може бути функція, що приймає масив елементів певного типу:
function arrayLogger<T extends Array<string>>(array: T): void {
    array.forEach((item) => console.log(item));
  }
  
  arrayLogger(['Hello', 'World']); // Ok
  arrayLogger([1, 2, 3]); // Error
  
  export {};
// У цьому випадку T extends Array<string> означає, що параметр функції має бути масивом рядків.