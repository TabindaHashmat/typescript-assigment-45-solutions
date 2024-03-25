interface DinnerInvitation {
  guestList: string[];
  date: string;
  location: string;
  time: string;
}

// Initial guest list
const initialGuestList: DinnerInvitation = {
  guestList: ["Asma", "Adeena", "Mehwish"],
  date: "February 25, 2024",
  location: "XYZ Restaurant",
  time: "7:00 PM",
};

// Function to print invitation messages
function printInvitations(invitation: DinnerInvitation): void {
  invitation.guestList.forEach((guest, index) => {
    console.log(`Invitation ${index + 1}: Dear ${guest}, you are invited to dinner on ${invitation.date} at ${invitation.location} at ${invitation.time}.`);
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
const middleIndex = Math.floor(initialGuestList.guestList.length / 2);
initialGuestList.guestList.splice(middleIndex, 0, "Ali");

// Use append() to add one new guest to the end of the list
initialGuestList.guestList.push("Fahad");

// Print new set of invitation messages
console.log("\nUpdated dinner invitations:");
printInvitations(initialGuestList);

