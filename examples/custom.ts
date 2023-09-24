type User = {
    id: number;
    name: string;
  };
  
  const user: User = {
    id: 1,
    name: "Alice",
  };

  // У TypeScript ви можете визначити власні типи за допомогою ключового слова type.
  // Тут User — це тип даних користувача, який ми визначили за допомогою ключового слова type. Він є структурою об'єкта з двома полями: id, яке є числом, і name, яке є рядком.

  type Coordinate = [number, number];

type UserWithCoords = {
  id: number;
  name: string;
  coords: Coordinate;
};

const userWithCoords: UserWithCoords = {
  id: 1,
  name: 'Alice',
  coords: [10, 20],
};

export {};

// У цьому прикладі ми визначили тип Coordinate як кортеж з двох чисел, а потім використали цей тип у визначенні іншого типу, UserWithCoords.
// Користувацькі типи можуть бути більш складними і включати в себе інші типи даних користувача.