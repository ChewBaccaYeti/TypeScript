// Ми також можемо міксувати Interface та type, але результат нам доведеться зберегти як тип.
type Cat = {
    meow: () => string;
  };
  
  interface Dog {
    bark: () => string;
  }
  
  type DogOrCat = Dog | Cat;
  type DogAndCat = Dog & Cat;
  
  export {};