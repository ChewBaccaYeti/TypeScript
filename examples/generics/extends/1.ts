const merged = merge({ name: 'Alisa' }, 'TEXT'); // {0: 'T', 1: 'E', 2: 'X', 3: 'T', name: 'Alisa'}

// Ми передали другим аргументом рядок ‘TEXT’ і у нас вийде дивний результат. Ми можемо обмежити тип, використовуючи extends. 
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const merged = merge({ name: 'Alisa' }, 'TEXT');
  
  merged.name;
  
  export {};

// Ми зробили:
T extends object, U extends object
// Це дає нам обмеження, що T та U мають бути об'єктами.