// Пам'ятаєте, ми створювали тип кортежу? Але метод 'push' все одно працював. Так ось, використовуючи Readonly, можна створити дійсно незмінний масив.
const arr: Readonly<string[]> = ['One', 'Two', 'Three'];

arr.push('Four'); // Error: Property 'push' does not exist on type 'readonly string[]'.

export {};
// Тепер цей масив не можна модифікувати жодним чином.