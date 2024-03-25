// Initial guest list
let guestList = ["Zainab", "Asma", "Ali", "Adeena", "Mehwish", "Fahad"];

// Inform that only two people can be invited
console.log("Due to unforeseen circumstances, we can invite only two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the remaining two people still invited
guestList.forEach((guest, index) => {
  console.log(`Invitation ${index + 1}: Dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names to make the list empty
guestList.pop();
guestList.pop();

// Print the list to ensure it's empty
console.log("\nRemaining guests after the dinner:", guestList);
