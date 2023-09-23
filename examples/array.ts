let arrNumber: number[];

arrNumber = [1, ];

export {};

let arrString: string[];

arrString = ['Text'];

export {};

let matrix: number[][] = [[1, 2], [3, 4]]; // многоуровневый массив

let mixed: (number | string)[] = [1, 'two']; // массив разных видов

let numbers: Array<number> = [1, 2, 3, 4, 5]; // тип масиву через узагальнення (generic)

/*
let users: {
    name: string;
    age: number;
}[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
]; // масив об'єктів
*/

type User = {
    name: string;
    age: number;
};

let users: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
]; // той ж самий масив об'єктів, але більш зручний опис

let arrAny: any[]; // масив будь-якого типу даних

arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

export {};