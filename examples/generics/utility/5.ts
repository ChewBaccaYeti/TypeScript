// Він часто використовується для складання типів, наприклад, під час роботи з API, звідки може прийти безліч полів.
// Зазвичай для всіх цих полів вже існує якийсь базовий тип, чи то користувач, сторінка, чи документ, і з допомогою 'Pick' ми вибираємо потрібні для конкретного випадку поля.
type BaseEmployee = {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    department: string;
    startDate: Date;
    // ...і багато інших полів
  };
  
  type BaseProject = {
    id: number;
    name: string;
    budget: number;
    deadline: Date;
    // ...і багато інших полів
  };
  
  type Assignment = {
    employee: Pick<BaseEmployee, 'id' | 'firstName' | 'lastName'>;
    projects: Pick<BaseProject, 'id' | 'name' | 'deadline'>[];
    shouldNotifyEmployee?: boolean;
  };
  
  export {};
// У цьому прикладі Assignment — це тип, що описує властивості для компонента або функції, що призначає співробітників (BaseEmployee) на проєкти (BaseProject).
// Для цього використовуються лише деякі поля з BaseEmployee та BaseProject, а не всі.