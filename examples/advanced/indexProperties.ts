type IndexType = {
  [prop: string]: string;
}
// У цьому визначенні типу, prop: string вказує, що ключі мають бути рядками, а string після двокрапки вказує, що значення мають бути рядками.

type Person = {
  name: string;
  [x: string]: string;
};

const user: Person = {
  name: 'Alex',
  gender: 'MAN',
  country: 'Ukraine',
};

export {};