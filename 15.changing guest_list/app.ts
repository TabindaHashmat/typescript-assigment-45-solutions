interface DinnerInvitation {
    guestName: string;
    date: string;
    location: string;
    time: string;
}

// Update the invitation with the new guest name and highlight the old guest name
function sendUpdatedInvitation(newGuestName: string, originalGuestName: string, invitation: DinnerInvitation): string {
    const updatedInvitation: DinnerInvitation = {
        ...invitation,
        guestName: newGuestName,
    };

    const invitationMessage: string = `
      Subject: Update: Dinner Invitation
  
      Dear ${newGuestName},
  
      I hope this message finds you well. I wanted to reach out to inform you that unfortunately, ${originalGuestName} is unable to join us for dinner on ${invitation.date}. While we will miss their company, we would love for you to join us in their place.
  
      Your presence would be greatly appreciated, and we believe your company will add a wonderful touch to the evening. The dinner will still take place at ${invitation.location} at ${invitation.time}. Please let me know at your earliest convenience if you are able to attend.
  
      We look forward to sharing a delightful evening with you and appreciate your flexibility.
  
      Best regards,
      ${invitation.guestName}
    `;

    const highlightedMessage: string = invitationMessage.replace(
        new RegExp(originalGuestName, 'g'),
        `\x1b[33m${originalGuestName}\x1b[0m`
    );

    return highlightedMessage;
}

// Example usage with Sanober as the original guest and Hira as the new guest
const originalInvitation: DinnerInvitation = {
    guestName: "Sanober",
    date: "February 25, 2024",
    location: "XYZ Restaurant",
    time: "7:00 PM",
};

const newGuestName = "Hira";

// Output the updated invitation message with highlighted old guest name
console.log(sendUpdatedInvitation(newGuestName, originalInvitation.guestName, originalInvitation));
