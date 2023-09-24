type Person = {
    name: string;
    age?: number; // age є опціональною властивістю
  };
  
  const alice: Person = { name: 'Alice', age: 27 };
  const bob: Person = { name: 'Bob' }; // age не вказано, це припустимо
  
  export {};

  // У цьому прикладі age є опціональною властивістю Person. Це означає, що під час створення об'єкта типу Person, властивість age може бути пропущеною.