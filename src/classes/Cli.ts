// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
import Vehicle from "./Vehicle.js";

// define the Cli class
class Cli {
  // DONE: update the vehicles property to accept Truck and Motorbike objects as well
  // DONE: You will need to use the Union operator to define additional types for the array
  // DONE: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  selectedVehicleType: string | undefined;
  exit: boolean = false;

  // DONE: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    // for (let i = 0; i < vehicles.length; i++) {
    //   console.log(`${vehicles[i].vehicleType}`);
    // }

    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            // this.selectedVehicleType = vehicle.vehicleType;
            // console.log(`choices: ${this.selectedVehicleType}`);
            //return { vehicle };
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model} -- ${vehicle.vehicleType}`,
              //value: { vn: vehicle.vin, vType: vehicle.vehicleType }
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        console.log(`a.selectedVehicleVin ${answers.selectedVehicleVin}`);
        // find vehicle type of the selectedVehicleVin
        // set the selectedVehicleType to the type of the selected vehicle
        let arr: (Car | Truck | Motorbike)[] = this.vehicles;
        for (let i = 0; i < arr.length; i++) {
          //console.log(`arr.vin ${arr[i].vin}`);
          //console.log(`arr.vehicletype ${arr[i].vehicleType}`);
          if (this.selectedVehicleVin === arr[i].vin) {
            this.selectedVehicleType = arr[i].vehicleType;
            console.log(`arr[i].vin: ${this.selectedVehicleVin}`)
            console.log(`arr[i].vehicleType: ${this.selectedVehicleType}`)
          }
        }

        // vehicles: (Car | Truck | Motorbike)[];

        // this.selectedVehicleVin = answers.vn;
        // console.log(`a.value.vn ${answers.value.vn}`);
        // console.log(`a.value.vType ${answers.value.vType}`);
        // this.selectedVehicleVin = answers.vin;
        // this.selectedVehicleType = answers.vehicleType;

        // console.log(`this.selectedVehicleVin ${this.selectedVehicleVin}`);
        // console.log(`this.selectedVehicleType ${this.selectedVehicleType}`);
        // console.log(`a.vin ${answers.vin}`);
        // console.log(`a.vtype ${answers.vehicleType}`);
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // DONE: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        // DONE: add statements to create a truck or motorbike if the user selects the respective vehicle type
        else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        }
        else {
          this.createMotorbike();
        }

      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // DONE: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // DONE: Use the answers object to pass the required properties to the Truck constructor
        const truck = new Truck(
          // DONE: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          answers.towingCapacity
        )
        // DONE: push the truck to the vehicles array
        this.vehicles.push(truck);
        // DONE: set the selectedVehicleVin to the vin of the truck
        this.selectedVehicleVin = truck.vin;
        // DONE: perform actions on the truck
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // DONE: Use the answers object to pass the required properties to the Motorbike constructor
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [new Wheel(answers.frontWheelDiameter, answers.frontWheelBrand), new Wheel(answers.rearWheelDiameter, answers.rearWheelBrand)]
        )
        // DONE: push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // DONE: set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // DONE: perform actions on the motorbike
        this.performActions();

      });
  }

  // ###########################################################################
  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(vehicle: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        console.log("findVehicleToTow.then");
        // TODO: check if the selected vehicle is the truck
        console.log(`find v to tow: answers.vehicleType: ${answers.vehicleType}`);
        if (vehicle.towingCapacity != undefined) {
          // TODO: if it is (a truck), log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action
          console.log("truck cannot tow itself");
          //this.performActions();
          //this.findVehicleToTow(vehicle);
          return;
        } else {
          // TODO: if it is not (a truck), tow the selected vehicle then perform actions on the truck to allow the user to select another action
          console.log("tow and prompt to select another action");
          // this.performActions()
          return;
        }
      });
  }
  // ######################################################################


  // method to perform actions on a vehicle
  performActions(): void {

    // modify possible actions to suppress inappropriate actions
    let arrs: string[] = ["Print details", "Start vehicle", "Accelerate 5 MPH", "Decelerate 5 MPH", "Stop vehicle", "Turn right", "Turn left", "Reverse"];
    if (this.selectedVehicleType === "Truck") { arrs.push("Tow") };
    if (this.selectedVehicleType === "Motorbike") { arrs.push("Wheelie") };
    arrs.push("Select or create another vehicle");
    arrs.push("Exit")

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // DONE: add options to tow and wheelie
          choices: arrs
          //[          //   'Print details',  //   'Start vehicle',    //   'Accelerate 5 MPH',    //   'Decelerate 5 MPH',      //   'Stop vehicle',      //   'Turn right',      //   'Turn left',        //   'Reverse',        //   'Tow',       //   'Wheelie',      //   'Select or create another vehicle',          //   'Exit',
          // ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
              // console.log(`printDetails: ${this.vehicles[i]}`)
              // console.log(`printDetails: ${this.vehicles[i].vehicleType}`)
              // console.log(`printDetails: ${this.vehicles[i].vin}`)
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. 
        // Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. 
        // After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        else if (answers.action === 'Tow') {
          console.log("cli.performActions.tow");
          this.findVehicleToTow();

          // let v: (Car | Truck | Motorbike);
          // if (this.selectedVehicleType === "Truck") {
          //   // get the truck object from the vehicles array for the matching vin
          //   for (let i = 0; i < this.vehicles.length; i++) {
          //     if (this.vehicles[i].vin === this.selectedVehicleVin) {
          //       v = this.vehicles[i];
          //       return;
          //     }
          //   }
          //   this.findVehicleToTow(v);
          //   return;
          // }

          // return;
          //for (let i = 0; i < this.vehicles.length; i++) {
          //  if (this.vehicles[i].vin === this.selectedVehicleVin) {
          //if (this.vehicles[i].tow)
          //  this.vehicles[i].findVehicleToTow(Truck);
          //  }
          //}
          //this.findVehicleToTow(vehicle:Truck)
        }

        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'Wheelie') {
          console.log("cli.performActions.wheelie");

        }
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // ### START CLI() BEGINNING POINT ###
  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
