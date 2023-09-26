// Omit<T, K>
// Це Pick, але навпаки. Дозволяє створити новий тип на основі типу T шляхом виключення набору властивостей, зазначених у K.
type Person = {
    name: string;
    age: number;
    location: string;
  };
//  Ми можемо створити новий тип 'PersonWithoutLocation', використовуючи 'Omit':
type PersonWithoutLocation = Omit<Person, 'location'>;
//  Тепер 'PersonWithoutLocation' є таким самим типом, як і 'Person', але без властивості 'location'.
//  Це може бути корисно, якщо в деяких контекстах ми не хочемо мати певних властивостей у наших типах.