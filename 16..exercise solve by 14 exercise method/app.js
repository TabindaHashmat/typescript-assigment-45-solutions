// Initial guest list
var initialGuestList = {
    guestList: ["Asma", "Adeena", "Mehwish"],
    date: "February 25, 2024",
    location: "XYZ Restaurant",
    time: "7:00 PM",
};
// Function to print invitation messages
function printInvitations(invitation) {
    invitation.guestList.forEach(function (guest, index) {
        console.log("Invitation ".concat(index + 1, ": Dear ").concat(guest, ", you are invited to dinner on ").concat(invitation.date, " at ").concat(invitation.location, " at ").concat(invitation.time, "."));
    });
}
// Print initial invitation messages
console.log("Initial dinner invitations:");
printInvitations(initialGuestList);
// Inform that a bigger dinner table is available
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
initialGuestList.guestList.unshift("Zainab");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(initialGuestList.guestList.length / 2);
initialGuestList.guestList.splice(middleIndex, 0, "Ali");
// Use append() to add one new guest to the end of the list
initialGuestList.guestList.push("Fahad");
// Print new set of invitation messages
console.log("\nUpdated dinner invitations:");
printInvitations(initialGuestList);
