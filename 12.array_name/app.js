// Example array of names
var people = ["Alia", "Baby", "sana", "Dania", "esha"];
// Function to generate personalized greeting messages
function generateGreetingMessages(names) {
    var greetingMessages = [];
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        var greetingMessage = "Hello, ".concat(name_1, "! Welcome to our event.");
        greetingMessages.push(greetingMessage);
    }
    return greetingMessages;
}
// Generate personalized greeting messages for each person
var greetingMessages = generateGreetingMessages(people);
// Output the greeting messages
greetingMessages.forEach(function (message, index) {
    console.log("Person ".concat(index + 1, ": ").concat(message));
});
