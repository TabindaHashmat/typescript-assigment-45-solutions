// Original guest list
var guestList = ["1. Alia", "2. Hira", "3. Mehwish"];
// Name of the guest who can't make it
var guestWhoCantMakeIt = "2. Hira";
// Name of the new guest to invite
var newGuest = "4. Sanober";
// Print the name of the guest who can't make it
console.log("Unfortunately, ".concat(guestWhoCantMakeIt.split('. ')[1], " can't make it to the dinner."));
// Replace the name of the guest who can't make it with the new guest's name
guestList = guestList.map(function (guest) { return (guest === guestWhoCantMakeIt ? newGuest : guest); });
// Print the updated invitation messages for each guest
guestList.forEach(function (guest) {
    console.log("Invitation: Dear ".concat(guest.split('. ')[1], ", You are invited to dinner."));
});
// Print the total number of people invited to dinner
var numberOfGuests = guestList.length;
console.log("We are inviting ".concat(numberOfGuests, " people to dinner."));
