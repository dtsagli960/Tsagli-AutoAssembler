// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Motorbike class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = []) {
        // TODO: The constructor should call the constructor of the parent class, Vehicle
        // TODO: The constructor should initialize the properties of the Motorbike class
        // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels.length === 2 ? wheels : [new Wheel(18), new Wheel(18)];
    }
    // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    performWheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}\n` +
            `Make: ${this.make}\n` +
            `Model: ${this.model}\n` +
            `Year: ${this.year}\n` +
            `Weight: ${this.weight} kg\n` +
            `Top Speed: ${this.topSpeed} km/h\n` +
            `Color: ${this.color}\n` +
            `Wheels: ${this.wheels.length} (Diameter: ${this.wheels[0].getDiameter} inches) (Brand: ${this.wheels[0].getTireBrand})`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
