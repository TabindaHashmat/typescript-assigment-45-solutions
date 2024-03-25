// magicians.ts

// Function to show magicians
function showMagicians(magicians: string[]): void {
    console.log("Magicians:");
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Array of magician's names
const magicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

// Call the function to show magicians
showMagicians(magicianNames);
