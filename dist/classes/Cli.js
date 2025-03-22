// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
// define the Cli class
class Cli {
    // TODO: Update the constructor to accept Truck and Motorbike objects as well
    constructor(vehicles) {
        this.exit = false;
        this.vehicles = vehicles;
    }
    // static method to generate a vin
    static generateVin() {
        // return a random string
        return (Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15));
    }
    // method to choose a vehicle from existing vehicles
    chooseVehicle() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "selectedVehicleVin",
                message: "Select a vehicle to perform an action on",
                choices: this.vehicles.map((vehicle) => {
                    return {
                        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                        value: vehicle.vin,
                    };
                }),
            },
        ])
            .then((answers) => {
            // set the selectedVehicleVin to the vin of the selected vehicle
            this.selectedVehicleVin = answers.selectedVehicleVin;
            // perform actions on the selected vehicle
            this.performActions();
        });
    }
    // method to create a vehicle
    createVehicle() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "vehicleType",
                message: "Select a vehicle type",
                // TODO: Update the choices array to include Truck and Motorbike
                choices: ["Car", "Truck", "Motorbike"],
            },
        ])
            .then((answers) => {
            if (answers.vehicleType === "Car") {
                // create a car
                this.createCar();
            }
            // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
            else if (answers.vehicleType === "Truck") {
                this.createTruck();
            }
            else if (answers.vehicleType === "Motorbike") {
                this.createMotorbike();
            }
        });
    }
    // method to create a car
    createCar() {
        inquirer
            .prompt([
            {
                type: "input",
                name: "color",
                message: "Enter Color",
            },
            {
                type: "input",
                name: "make",
                message: "Enter Make",
            },
            {
                type: "input",
                name: "model",
                message: "Enter Model",
            },
            {
                type: "input",
                name: "year",
                message: "Enter Year",
            },
            {
                type: "input",
                name: "weight",
                message: "Enter Weight",
            },
            {
                type: "input",
                name: "topSpeed",
                message: "Enter Top Speed",
            },
            {
                type: "input",
                name: "numDoors",
                message: "Enter Number of Doors",
            },
            {
                type: "input",
                name: "wheels",
                message: "Enter Number of Wheels",
            }
        ])
            .then((answers) => {
            // Creating a new Car instance
            const car = new Car(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), answers.wheels);
            // Adding the car to the vehicles array
            this.vehicles.push(car);
            // Setting the selected vehicle
            this.selectedVehicleVin = car.vin;
            // Perform actions on the newly created car
            this.performActions();
        });
    }
    // method to create a truck
    createTruck() {
        inquirer
            .prompt([
            {
                type: "input",
                name: "color",
                message: "Enter Color",
            },
            {
                type: "input",
                name: "make",
                message: "Enter Make",
            },
            {
                type: "input",
                name: "model",
                message: "Enter Model",
            },
            {
                type: "input",
                name: "year",
                message: "Enter Year",
            },
            {
                type: "input",
                name: "weight",
                message: "Enter Weight",
            },
            {
                type: "input",
                name: "topSpeed",
                message: "Enter Top Speed",
            },
            {
                type: "input",
                name: "towingCapacity",
                message: "Enter Towing Capacity",
            },
        ])
            .then((answers) => {
            // TODO: Use the answers object to pass the required properties to the Truck constructor
            const truck = new Truck(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), parseInt(answers.towingCapacity));
            // TODO: push the truck to the vehicles array
            this.vehicles.push(truck);
            // TODO: set the selectedVehicleVin to the vin of the truck
            this.selectedVehicleVin = truck.vin;
            // TODO: perform actions on the truck
            this.performActions();
        });
    }
    // method to create a motorbike
    createMotorbike() {
        inquirer
            .prompt([
            {
                type: "input",
                name: "color",
                message: "Enter Color",
            },
            {
                type: "input",
                name: "make",
                message: "Enter Make",
            },
            {
                type: "input",
                name: "model",
                message: "Enter Model",
            },
            {
                type: "input",
                name: "year",
                message: "Enter Year",
            },
            {
                type: "input",
                name: "weight",
                message: "Enter Weight",
            },
            {
                type: "input",
                name: "topSpeed",
                message: "Enter Top Speed",
            },
            {
                type: "input",
                name: "frontWheelDiameter",
                message: "Enter Front Wheel Diameter",
            },
            {
                type: "input",
                name: "frontWheelBrand",
                message: "Enter Front Wheel Brand",
            },
            {
                type: "input",
                name: "rearWheelDiameter",
                message: "Enter Rear Wheel Diameter",
            },
            {
                type: "input",
                name: "rearWheelBrand",
                message: "Enter Rear Wheel Brand",
            },
        ])
            .then((answers) => {
            // TODO: Use the answers object to pass the required properties to the Motorbike constructor
            const motorbike = new Motorbike(Cli.generateVin(), answers.color, answers.make, answers.model, parseInt(answers.year), parseInt(answers.weight), parseInt(answers.topSpeed), answers.wheel);
            // TODO: push the motorbike to the vehicles array
            this.vehicles.push(motorbike);
            // TODO: set the selectedVehicleVin to the vin of the motorbike
            this.selectedVehicleVin = motorbike.vin;
            // TODO: perform actions on the motorbike
            this.performActions();
        });
    }
    // method to find a vehicle to tow
    // TODO: add a parameter to accept a truck object
    findVehicleToTow(truck) {
        inquirer
            .prompt([
            {
                type: "list",
                name: "vehicleToTow",
                message: "Select a vehicle to tow",
                choices: this.vehicles
                    .filter((vehicle) => vehicle !== truck)
                    .map((vehicle) => ({
                    name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                    value: vehicle,
                })),
            },
        ])
            .then((answers) => {
            truck.tow(answers.vehicleToTow);
            this.performActions();
        });
    }
    // method to perform actions on a vehicle
    performActions() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "action",
                message: "Select an action",
                // TODO: add options to tow and wheelie
                choices: [
                    "Print details",
                    "Start vehicle",
                    "Accelerate 5 MPH",
                    "Decelerate 5 MPH",
                    "Stop vehicle",
                    "Turn right",
                    "Turn left",
                    "Reverse",
                    "Tow",
                    "Wheelie",
                    "Select or create another vehicle",
                    "Exit",
                ],
            },
        ])
            .then((answers) => {
            const vehicle = this.vehicles.find((v) => v.vin === this.selectedVehicleVin);
            if (answers.action === "Tow" && vehicle instanceof Truck) {
                this.findVehicleToTow(vehicle);
                return;
            }
            if (answers.action === "Wheelie" && vehicle instanceof Motorbike) {
                vehicle.performWheelie();
            }
            this.performActions();
        });
    }
    startCli() {
        console.log("Welcome to the Tsagli-AutoAssembler CLI!");
        this.mainMenu();
    }
    // method to display the main menu
    mainMenu() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "menuOption",
                message: "Choose an option:",
                choices: ["Create a vehicle", "Choose a vehicle", "Exit"],
            },
        ])
            .then((answers) => {
            if (answers.menuOption === "Create a vehicle") {
                this.createVehicle();
            }
            else if (answers.menuOption === "Choose a vehicle") {
                this.chooseVehicle();
            }
            else {
                console.log("Exiting CLI. Goodbye!");
                process.exit(0);
            }
        });
    }
}
// export the Cli class
export default Cli;
