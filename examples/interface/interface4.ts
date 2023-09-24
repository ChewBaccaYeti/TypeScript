// Ми можемо реалізовувати кілька інтерфейсів одночасно.
interface Walkable {
    walk(): void;
  }
  
  interface Eatable {
    eat(): void;
  }
  
  class Animal implements Walkable, Eatable {
    walk() {
      console.log('The animal walks...');
    }
  
    eat() {
      console.log('The animal eats...');
    }
  }
  
  const animal = new Animal();
  
  export {};
// У цьому прикладі клас Animal реалізує два інтерфейси: Walkable та Eatable.

// Ще за допомогою інтерфейсу можна описати функцію.
interface AddFunc {
    (n1: number, n2: number): number;
  }
  
  let add: AddFunc;
  
  add = (n1:number, n2: number) => {
    return n1 + n2;
  }
// Але, це не дуже зручно і складно виглядає, краще в таких випадках використовувати type.