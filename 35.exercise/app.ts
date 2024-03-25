let common_Characteristic = 'would make a great pet';
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print the name of each animal
console.log('Animal Names:');
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log('\nAnimal Statements:');
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} ${common_Characteristic}.`);
}

// Print a line stating what these animals have in common
console.log(`\nAny of these animals ${common_Characteristic}!`);
