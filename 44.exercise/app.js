function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich Order:');
    if (items.length === 0) {
        console.log('You ordered an empty sandwich. Please add some items!');
    }
    else {
        console.log("Items: ".concat(items.join(', ')));
        console.log('Enjoy your sandwich!');
    }
    console.log('---------------------');
}
// Call the function three times with different numbers of arguments
orderSandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Ham', 'Swiss Cheese');
orderSandwich(); // Empty sandwich order
