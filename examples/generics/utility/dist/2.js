"use strict";
exports.__esModule = true;
var alice = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
};
alice.name = 'Bob'; // OK
var aliceReadonly = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
};
user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
// У цьому прикладі ми можемо змінити ім'я користувача alice після його створення. Але оскільки aliceReadonly має тип Readonly<User>, ми отримаємо помилку компіляції.
