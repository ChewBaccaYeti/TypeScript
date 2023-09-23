function greet(): string {
    return "Hello, world!";
  }
  
  let result = greet();

  function greet(): string {
    return 100; // Error: Type 'number' is not assignable to type 'string'
  }
  
  let result = greet();
  
  export {};

  const greet = (): string => {
    return "Hello, world!";
  }
  
  let result = greet();