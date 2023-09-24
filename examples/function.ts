let myFunc: (firstArg: string, secondArg: number) => void;

myFunc = (first: string, second: number) => {
  console.log(`First: ${first}, Second: ${second}`);
};

myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"

export {};

// У цьому прикладі myFunc визначено як функцію, яка приймає два аргументи: рядок і число, і нічого не повертає (void).
// Потім ми присвоюємо функцію, що відповідає цьому типу функції, змінній myFunc.