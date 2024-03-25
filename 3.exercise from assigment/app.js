// nameCases.ts
var personName = "Tabinda";
// Lowercase
console.log("Lowercase:", personName.toLowerCase());
// Uppercase
console.log("Uppercase:", personName.toUpperCase());
// Titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log("Titlecase:", toTitleCase(personName));
