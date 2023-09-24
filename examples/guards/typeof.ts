type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  return a + b;
}

export {};
// Тут ми отримаємо помилку, оскільки TypeScript не знає, як працювати з цими типами.

// У наступному прикладі ми використовуємо typeof, щоб перевірити, чи є кожен аргумент рядком перед їх з'єднанням:

type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

export {};
