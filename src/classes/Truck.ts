// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // DONE: Declare properties of the Truck class
  // DONE: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // DONE: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[]; //an array of wheel objects as a property
  towingCapacity: number;
  // added vehicleType property
  vehicleType: string;

  // DONE: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number) {

    // Call the constructor of the parent class, Vehicle
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    super();

    // DONE: The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // DONE: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }

    // set towingCapacity (not found in other vehicle types like cars and motorbikes)
    this.towingCapacity = towingCapacity;
    this.vehicleType = "Truck";
  } // end constructor

  // DONE: Implement the tow method from the AbleToTow interface
  // DONE: Get the make an model of the vehicle if it exists
  // DONE: Check if the vehicle's weight is less than or equal to the truck's towing capacity
  // DONE: If it is not, log that the vehicle is too heavy to be towed
  tow(vehicle: Truck | Motorbike | Car): void {
    const make = vehicle.make;
    const model = vehicle.model;
    const weight = vehicle.weight;
    if (weight > this.towingCapacity) {
      console.log(`Vehicle ${make} ${model} is too heavy to be towed`);
    } else {
      console.log(`Vehicle ${make} ${model} is being towed`);
    }
    return;
  }

  // DONE: Override the printDetails method from the Vehicle class
  // DONE: The method should call the printDetails method of the parent class
  // DONE: The method should log the details of the Truck
  // DONE: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Vehicle Type: ${this.vehicleType}`);
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(`Wheel${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`);
    }
    return;
  }


}


// Export the Truck class as the default export
export default Truck;
