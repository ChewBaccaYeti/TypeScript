"use strict";
exports.__esModule = true;
// Розгляньмо ще один приклад, коли використання узагальнених типів стає просто необхідним. Це відбувається, коли ми працюємо з асинхронним кодом. 
// Оскільки Promise може повернути абсолютно все, без дженерика ми ніколи не дізнаємось, що він повертає.
var promise = new Promise(function (resolve) {
    setInterval(function () {
        resolve('Done!');
    }, 1000);
});
promise.then(function (data) {
    console.log(data);
});
// Всередині 'data' маємо тип 'string'. Якщо ми не вкажемо тип, він буде позначений як 'any'.
