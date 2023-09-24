// Давайте скористаємося ним за призначенням та опишемо клас:
interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    bark: string;
  }
  
  class MyDog implements Dog {
    name = 'Fido';
    bark = 'Woof!';
  }
  
  // Error: Property 'name' is missing in type 'OtherDog'
  class OtherDog implements Dog {
    bark = 'Woof!';
  }
  
  export {};

  // За допомогою ключового слова 'implements' ми встановлюємо обов'язкові властивості для класу. 
  // Якщо тепер у класі ми пропустимо будь-яку властивість, вказану в інтерфейсі, ми отримаємо помилку, як це сталося в класі OtherDog.

