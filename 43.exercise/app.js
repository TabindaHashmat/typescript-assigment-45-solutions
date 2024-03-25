function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Make an array of magician’s names
var magicianNames = ['Dani', 'Hni', 'Dania', 'senia & Tania'];
// Call make_great() to modify the array
var greatMagicians = makeGreat(magicianNames);
// Call show_magicians() to see that the list has actually been modified
showMagicians(greatMagicians);
