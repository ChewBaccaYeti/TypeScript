// Давайте розглянемо хрестоматійний приклад – поєднання двох об'єктів.
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

  const merged: {
    name: string;
} & {
    age: number;
}

  const merged = merge({ name: 'Alisa' }, { age: 28 });
  
  merged.name;
  
  export {};
// Ми передали два типи T та U, що будуть застосовані до аргументів функції, і тепер у нас немає помилки. Ми отримуємо об'єднаний тип.