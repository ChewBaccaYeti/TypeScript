// А тепер давайте застосуємо дженерики до цієї концепції з використанням 'keyof'. У нашій практиці, ймовірно, виникне потреба повертати значення з об'єкта.
// Але навіть якщо ви використовуєте дженерики, ви можете натрапити на помилку.
function extractValue<T extends object, U>(obj: T, key: U) {
    return obj[key]; // Type 'U' cannot be used to index type 'T'
  }
  
  extractValue({ name: 'John' }, 'name');
  
  export {};

// Це відбувається, оскільки TypeScript не може гарантувати, що вказаний ключ дійсно наявний в об'єкті.
// І тут ми можемо скористатися оператором 'keyof'. Він дозволяє уточнити, що певний тип існує як ключ в об'єкті.
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
  }
  
  extractValue({ name: 'John' }, 'name');
  
  export {};
// Тут ми написали:
T extends object, U extends keyof T 
//Тобто ми скористалися 'extends' для обмеження значень 'U' ключами з об'єкта 'T'.