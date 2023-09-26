// Partial<T>
// Утилітний тип Partial<T> створює новий тип на основі типу T, але робить всі його властивості необов'язковими.
// Це дуже корисно в ситуаціях, коли ви хочете створити об'єкт, заснований на певному типі, але не хочете або не можете вказати значення всіх властивостей відразу.
type User = {
    id: number;
    name: string;
    email: string;
    registered: boolean;
  };
  
  function createUser(data: Partial<User>): User {
    // Деякі значення за замовчуванням:
    const defaultUser: User = {
      id: Date.now(),
      name: '',
      email: '',
      registered: false,
    };
  
    // З'єднуємо дані користувача та значення за замовчуванням
    return { ...defaultUser, ...data };
  }
  
  const newUser = createUser({ name: 'Alice', email: 'alice@example.com' });
  
  console.log(newUser);
  
  export {};
// У цьому прикладі Partial<User> дозволяє нам створювати користувачів, надаючи лише дані, які відомі на момент створення. Значення за замовчуванням використовуються для інших полів.