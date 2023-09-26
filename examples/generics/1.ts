// Основна ідея узагальнених типів (Generics) полягає в тому, що вони дозволяють визначити "узагальнений" тип, який потім може бути спеціалізований для роботи з різними іншими типами. 
// Замість того, щоб визначати окремі функції для кожного можливого типу даних, ви можете визначити одну функцію, яка працює з "будь-яким" типом даних.
let arr: any[] = [];
// Так, цей масив може містити рядки та числа, але також може містити все, що ми туди покладемо, від null до об'єктів. Але ми хочемо, щоб він містив лише рядки чи числа. 
// Саме тут нам на допомогу приходять generics.

// Ми знаємо, що масив це об'єкт Array і хочемо уточнити, які типи до нього можуть входити:
let arr: Array<string | number> = [];

// Ми вказали, що тип Array складатиметься з рядків та чисел і, тепер, якщо ми передамо туди не той тип, отримаємо помилку.
let arr: Array<string | number> = [];

arr = ['str', 10, true];

export {};