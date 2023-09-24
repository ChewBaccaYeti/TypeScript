"use strict";
exports.__esModule = true;
// Ми можемо використовувати оператор instanceof для роботи з класами, перевіряючи, чи є об'єкт екземпляром конкретного класу. 
// Класи можна також розглядати як типи даних, оскільки вони є структурою даних, визначені користувачем.
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving a car...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo: " + amount);
    };
    return Truck;
}());
// Create your instances
var carInstance = new Car();
var truckInstance = new Truck();
// Function to use vehicle
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(carInstance);
useVehicle(truckInstance);
// У цій умові ми перевіряємо, чи є аргумент vehicle екземпляром класу Truck. Якщо це так, то ми знаємо, що ми маємо доступ до методу loadCargo, який визначений тільки в класі Truck.
