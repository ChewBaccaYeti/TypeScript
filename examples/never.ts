// Функція, яка завжди викидає помилку
function throwError(message: string): never {
    throw new Error(message);
  }
  
  // Функція з нескінченним циклом
  function infiniteLoop(): never {
    while (true) {}
  }
  
  export {};