function concatenate(strs: string[]): string;
function concatenate(strs: string[], separator: string): string;
function concatenate(strs: any, separator?: any): any {
  if (separator !== undefined) {
    return strs.join(separator);
  } else {
    return strs.join('');
  }
}

let names = ['Alice', 'Bob', 'Charlie'];

console.log(concatenate(names)); // Outputs: AliceBobCharlie
console.log(concatenate(names, ', ')); // Outputs: Alice, Bob, Charlie

export {};
// Тут функція concatenate перевантажена з двома різними сигнатурами. Перша приймає один аргумент — масив рядків, а друга приймає два аргументи — масив рядків та рядок-розділювач.