interface DinnerInvitation {
  guestList: string[];
  date: string;
  location: string;
  time: string;
}

// Original guest list
let guestList: string[] = ["1. Alia", "2. Hira", "3. Mehwish"];

// Name of the guest who can't make it
let guestWhoCantMakeIt: string = "2. Hira";

// Name of the new guest to invite
let newGuest: string = "4. Sanober";

// Print the name of the guest who can't make it
console.log(`Unfortunately, ${guestWhoCantMakeIt.split('. ')[1]} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with the new guest's name
guestList = guestList.map(guest => (guest === guestWhoCantMakeIt ? newGuest : guest));

// Print the updated invitation messages for each guest
guestList.forEach(guest => {
  console.log(`Invitation: Dear ${guest.split('. ')[1]}, You are invited to dinner.`);
});

// Print the total number of people invited to dinner
let numberOfGuests: number = guestList.length;
console.log(`We are inviting ${numberOfGuests} people to dinner.`);




  