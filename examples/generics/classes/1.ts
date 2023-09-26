// Узагальнені класи в TypeScript дозволяють визначити клас з типами, що можуть бути встановлені під час створення екземпляра класу.
// Це дозволяє створювати класи, що можуть працювати з різними типами даних, зберігаючи водночас сувору типізацію.
class DataStorage<T> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Hello');
  textStorage.addItem('World');
  console.log(textStorage.getItems()); // ['Hello', 'World']
  textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(1);
  numberStorage.addItem(2);
  console.log(numberStorage.getItems()); // [1, 2]
  numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'
  
  export {};
// У цьому прикладі клас "DataStorage" має узагальнений тип "T", який визначається під час створення екземпляра класу.
// В результаті ми отримуємо універсальний клас для зберігання даних, що може працювати з рядками, числами або будь-якими іншими типами, які ми визначимо.