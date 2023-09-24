let value: never;

value = 123;
value = 'hello';

export {};

//Будь-які спроби присвоїти значення змінної value, яка має тип never, призводять до помилки компіляції.