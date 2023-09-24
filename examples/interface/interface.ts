interface Animal {
    name: string;
  }

  type Animal = {
    name: string;
  }

  interface Animal {
    name: string;
  }
  
  interface Animal {
    age: number;
  }
  
  let dog: Animal = {
    name: 'Fido',
    age: 5,
  };
  
  export {};

  // Interface підтримує об'єднання через оголошення з тим самим ім'ям. Якщо ви визначите два interface з одним і тим же ім'ям, вони будуть "змерджені" в одне.