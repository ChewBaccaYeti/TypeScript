// Ми можемо використовувати оператор instanceof для роботи з класами, перевіряючи, чи є об'єкт екземпляром конкретного класу. 
// Класи можна також розглядати як типи даних, оскільки вони є структурою даних, визначені користувачем.
class Car {
    drive() {
      console.log('Driving a car...');
    }
  }
  
  class Truck {
    drive() {
      console.log('Driving a truck...');
    }
  
    loadCargo(amount: number) {
      console.log(`Loading cargo: ${amount}`);
    }
  }
  
  // Define your type
  
  type Vehicle = Car | Truck;
  
  // Create your instances
  
  const carInstance = new Car();
  const truckInstance = new Truck();
  
  // Function to use vehicle
  
  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
  
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }
  
  useVehicle(carInstance);
  useVehicle(truckInstance);
  
  export {};
// У цій умові ми перевіряємо, чи є аргумент vehicle екземпляром класу Truck. Якщо це так, то ми знаємо, що ми маємо доступ до методу loadCargo, який визначений тільки в класі Truck.