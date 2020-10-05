// Classes: blueprint to create an object with some fields
// (values) and methods (functions) to represent a 'thing'

// Methods modifiers
// public: Method can be called any where, any time
// private: Method can only be called within class
// protect: Method can only be called within class or by methods in child classes

class Vehicle {
  // Constructor will instantly execute when we create an instance of class
  // Everytime we create a Vehicle instance, we need to provide a string to use as "color"
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep')
  }
}

// Car class inherit Vehicle
class Car extends Vehicle {
  // super() is a reference to the constructor method in the parent
  constructor(public wheels: number, color: string) {
    super(color)
  }

  private drive(): void {
    console.log('vroom!')
  }
  // private method is to restrict method to not be called from elsewhere
  // startDrivingProcess can call drive() since they both are in the same class
  startDrivingProcess(): void {
    this.honk()
    this.drive()
  }
}

const car = new Car(4, 'Blue')
car.startDrivingProcess()
console.log(car.color)
console.log(car.wheels)

const vehicle = new Vehicle('Blue')
console.log(vehicle.color)
