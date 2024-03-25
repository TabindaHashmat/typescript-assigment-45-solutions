// magicians.ts
// Function to show magicians
function showMagicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicianNames = ["Dani", "Hani", "adeena", "dania & Tania"];
// Call the function to show magicians
showMagicians(magicianNames);
