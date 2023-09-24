function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc(1, 1, function (num1, num2) { return num1 + num2; });
calc(10, 5, function (num1, num2) { return num1 - num2; });
// Ми можемо підвищити гнучкість. Замість того, щоб обмежувати тип CallbackType, який приймає рівно два числові аргументи, 
// можна допустити функції, які можуть приймати будь-яку кількість аргументів.
