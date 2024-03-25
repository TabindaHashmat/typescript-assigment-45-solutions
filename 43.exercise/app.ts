function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Make an array of magician’s names
let magicianNames: string[] = ['Dani', 'Hni', 'Dania', 'senia & Tania'];

// Call make_great() to modify the array
let greatMagicians: string[] = makeGreat(magicianNames);

// Call show_magicians() to see that the list has actually been modified
showMagicians(greatMagicians);
