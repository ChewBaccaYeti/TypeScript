// ReturnType<T>

// Дозволяє отримати тип функції, що повертається. Для функцій він має використовуватися з typeof.
// Ось простий приклад:
function greeting() {
    return 'Hello, world!';
  }
  
  type Greeting = ReturnType<typeof greeting>; // 'string'
  
  function multiply(a: number, b: number) {
    return a * b;
  }
  
  type MultiplyResult = ReturnType<typeof multiply>; // 'number'
  
  export {};

// Давайте напишемо обгортку для функції, але повертатимемо тип з колбеку. Тут нам не потрібен typeof, тому що TypeScript автоматично виводить типи для T.
type Callback = (...args: unknown[]) => unknown;

function createLoggedFunction<T extends Callback>(func: T) {
  let funcRef = func;

  const loggedFunction = (...args: Parameters<T>) => {
    console.log(`Function ${func.name} was called with arguments:`, args);
    const result = funcRef(...args) as ReturnType<T>;
    return result;
  };

  return loggedFunction;
}

export {};
// Тепер loggedFunction приймає функцію як аргумент і повертає нову функцію, яка всередині себе викликає вихідну функцію.
// Тип вихідної функції, що повертається, зберігається завдяки використанню ReturnType<T>.