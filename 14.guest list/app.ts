// Example array of guests
let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Function to generate dinner invitations
function generateInvitations(guests: string[]): string[] {
    let invitations: string[] = [];

    for (let guest of guests) {
        let invitation: string = `Dear ${guest}, you are invited to dinner. We look forward to having you!`;
        invitations.push(invitation);
    }

    return invitations;
}

// Generate dinner invitations for each guest
let dinnerInvitations: string[] = generateInvitations(guestList);

// Output the invitations
dinnerInvitations.forEach((invitation, index) => {
    console.log(`Invitation ${index + 1}: ${invitation}`);
});

