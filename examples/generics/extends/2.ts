// Розглянемо ще один приклад. У нас є функція, що повертатиме довжину або рядка, або масиву. Ми вирішили використати для цього дженерики:
type Length = {
    length: number;
  };
  
  function getLength<T extends Length>(str: T) {
    return str.length;
  }
  
  getLength('text');
  getLength([1, 2, 3]);
  getLength(100); // Errro: Argument of type 'number' is not assignable to parameter of type 'ILength'
  
  export {};
// Передаючи число в getLength, ми отримуємо помилку, оскільки у нього немає методу length.