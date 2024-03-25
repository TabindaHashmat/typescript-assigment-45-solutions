// Define an array of mountains
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
// Print the original list of mountains
console.log("Original list of mountains:");
mountains.forEach(function (mountain) {
    console.log(mountain);
});
// You can add more mountains to the array if needed
mountains.push("Cho Oyu", "Dhaulagiri");
// Print the updated list of mountains
console.log("\nUpdated list of mountains:");
mountains.forEach(function (mountain) {
    console.log(mountain);
});
