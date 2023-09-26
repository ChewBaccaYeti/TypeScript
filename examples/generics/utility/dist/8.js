"use strict";
exports.__esModule = true;
// Ми визначаємо тип Form, який є об'єднанням InitialFormType та об'єкта, що містить поле errors.
// Keyof InitialFormType отримує всі ключі з InitialFormType (в цьому випадку, це name, email та password), і Record створює новий тип, в якому кожен із цих ключів відображається на масив рядків.
// Потім Partial робить кожну властивість цього нового типу необов'язковою.
