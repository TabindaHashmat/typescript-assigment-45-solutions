// Original array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

// Print original order
console.log("Original order:", placesToVisit);

// Print alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Verify the original order is still intact
console.log("Original order after sorting:", placesToVisit);

// Print reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Verify the original order is still intact
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort to change the array to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
