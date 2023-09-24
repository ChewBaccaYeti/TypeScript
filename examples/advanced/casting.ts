// Type Casting (або Type Conversion) використовується для перетворення об'єкта одного типу на об'єкт іншого типу.

// TypeScript використовує два синтаксичні підходи для типового приведення: кутові дужки <> та оператор as.
let someValue: unknown = 'this is a string';

let strLength1: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;

let strLength3: number = someValue.length;

export {};

// Інтерпретація HTML елементу
const input = <HTMLInputElement>document.getElementById('inputEmail');

input.value = 'test@test.ts';

export {};

// І є другий, більш універсальний через as.
const input = document.getElementById('inputEmail') as HTMLInputElement;

input.value = 'test@test.ts';

export {};

// Таким чином, ви можете змінювати або призначати тип у процесі виконання коду. Спробуємо видалити його зараз і призначити пізніше.
const input = document.getElementById('inputEmail');

if (input) {
  (input as HTMLInputElement).value = 'test@test.ts';
}

export {};