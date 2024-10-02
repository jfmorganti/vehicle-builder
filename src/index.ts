// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// DONE: uncomment once trucks are implemented
let truck = new Truck(Cli.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
vehicles.push(truck);
truck = new Truck(Cli.generateVin(), "red", "Tesla", "Cybertruck", 2018, 8000, 100, [], 15000);
vehicles.push(truck);

// will use default wheels
let car;
car = new Car(Cli.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130, []);
vehicles.push(car);
car = new Car(Cli.generateVin(), 'black', 'Acura', 'RL300', 2013, 3500, 100, []);
vehicles.push(car);
car = new Car(Cli.generateVin(), 'orange', 'Lexus', 'GX 460', 2024, 4000, 110, []);
vehicles.push(car);
car = new Car(Cli.generateVin(), 'red', 'Ford', 'Focus', 2010, 2900, 90, []);
vehicles.push(car);

// DONE: uncomment once motorbikes are implemented
let motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
let motorbike = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbikeWheels);
vehicles.push(motorbike);
motorbikeWheels = [new Wheel(17, "Yamaha"), new Wheel(17, "Yamaha")];
motorbike = new Motorbike(Cli.generateVin(), "red", "Honda", "CR-250", 2022, 300, 185, motorbikeWheels);
vehicles.push(motorbike);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
