function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional properties to the car object
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and two other name-value pairs
var myCar = createCar('Toyota', 'Camry', 'color', 'Blue', 'optionalFeature', 'Sunroof');
// Print the object returned to ensure all information was stored correctly
console.log(myCar);
