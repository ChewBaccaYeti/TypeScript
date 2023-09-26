// Readonly<T>
// Утилітний тип, що робить усі властивості у типі T тільки для читання. Це означає, що після того, як об'єкт буде створений, його властивості не можна буде змінити.
// Давайте розглянемо приклад із типом User:
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  let alice: User = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  };
  
  alice.name = 'Bob'; // OK
  
  let aliceReadonly: Readonly<User> = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  };
  
  user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
  
  export {};
// У цьому прикладі ми можемо змінити ім'я користувача alice після його створення. Але оскільки aliceReadonly має тип Readonly<User>, ми отримаємо помилку компіляції.