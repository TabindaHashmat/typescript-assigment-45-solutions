let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    if (num === 1) {
        console.log(`${num}st`);  // 1st
    } else if (num === 2) {
        console.log(`${num}nd`); // 2nd
    } else if (num === 3) {
        console.log(`${num}rd`); // 3rd
    } else {
        console.log(`${num}th`); // 4th, 5th, 6th, 7th, 8th, 9th
    }
}
