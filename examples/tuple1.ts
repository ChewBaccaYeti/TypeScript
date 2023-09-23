let fixed: [string, number];

fixed = ['Text', 10];

fixed.push('Add this text'); // TS не реагує на цю обманку

export {};

let tuple: [string, ...number[]];

tuple = ['hello', 42, 100, 200]; // OK