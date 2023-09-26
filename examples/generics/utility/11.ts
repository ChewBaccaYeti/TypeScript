// Parameters<T>

// Витягує типи параметрів типу функції T. Вона повертає кортеж, що містить типи всіх параметрів функції T у тому порядку, в якому вони оголошені.
type MyFunctionType = (a: string, b: number, c: boolean) => void;

type MyParametersType = Parameters<MyFunctionType>;
// Результат: [string, number, boolean]
// У цьому прикладі MyFunctionType представляє тип функції з трьома параметрами: a типу string, b типу number і c типу boolean.
// Потім ми використовуємо Parameters для отримання типів параметрів цієї функції та привласнюємо результат типу MyParametersType.
// Результатом буде тип [string, number, boolean], що представляє кортеж із трьох типів параметрів функції.
// Отже, утиліта Parameters дозволяє нам отримати доступ до типів параметрів функції у TypeScript, як ми це зробили в прикладі з ReturnType.