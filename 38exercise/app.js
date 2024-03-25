function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size));
    console.log("Message: ".concat(message));
    console.log("Summary: A ".concat(size, "-sized shirt with the message \"").concat(message, "\" will be printed."));
}
// Make a large shirt with the default message
makeShirt();
// Make a medium shirt with the default message
makeShirt('Medium');
// Make a custom-sized shirt with a different message
makeShirt('Small', 'Custom message for a Small-sized shirt');
