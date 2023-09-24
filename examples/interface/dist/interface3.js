"use strict";
exports.__esModule = true;
var MyDog = /** @class */ (function () {
    function MyDog() {
        this.name = 'Fido';
        this.bark = 'Woof!';
    }
    return MyDog;
}());
// Error: Property 'name' is missing in type 'OtherDog'
var OtherDog = /** @class */ (function () {
    function OtherDog() {
        this.bark = 'Woof!';
    }
    return OtherDog;
}());
// За допомогою ключового слова 'implements' ми встановлюємо обов'язкові властивості для класу. 
// Якщо тепер у класі ми пропустимо будь-яку властивість, вказану в інтерфейсі, ми отримаємо помилку, як це сталося в класі OtherDog.
