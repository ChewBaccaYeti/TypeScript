// Pick<T, K>
// Pick — це утилітний тип у TypeScript, що дозволяє вам обрати набір властивостей з існуючого типу і створити новий тип на основі цих властивостей.
// Розглянемо приклад. У нас є тип User, що містить три властивості: id, name та email. Ми хочемо створити новий тип, що міститиме лише id і name.
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  type UserBasicInfo = Pick<User, 'id' | 'name'>;
  
  let userBasicInfo: UserBasicInfo = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com', // Error: Property 'email' does not exist on type 'UserBasicInfo'
  };
  
  export {};
// Pick дуже корисний, коли ви хочете працювати тільки з певною підмножиною властивостей наявного типу.