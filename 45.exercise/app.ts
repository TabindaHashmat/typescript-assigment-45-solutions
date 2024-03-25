interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string; // Additional properties can be added with string values
}

function createCar(manufacturer: string, model: string, ...options: string[]): Car {
    let car: Car = {
        manufacturer,
        model
    };

    // Add additional properties to the car object
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and two other name-value pairs
let myCar = createCar('Toyota', 'Camry', 'color', 'Blue', 'optionalFeature', 'Sunroof');

// Print the object returned to ensure all information was stored correctly
console.log(myCar);

