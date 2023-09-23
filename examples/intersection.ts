type Employee = {
    name: string;
    id: number;
  };
  
  type Manager = {
    employees: Employee[];
  };
  
  type CEO = Employee & Manager;
  
  const ceo: CEO = {
    name: 'Alice',
    id: 1,
    employees: [
      {
        name: 'Bob',
        id: 2,
      },
    ],
  };
  
  export {};

  // У цьому прикладі CEO є intersection тип Employee і Manager. Це означає, що об'єкт типу CEO повинен містити всі властивості, визначені в Employee та Manager.