var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Update the invitation with the new guest name and highlight the old guest name
function sendUpdatedInvitation(newGuestName, originalGuestName, invitation) {
    var updatedInvitation = __assign(__assign({}, invitation), { guestName: newGuestName });
    var invitationMessage = "\n      Subject: Update: Dinner Invitation\n  \n      Dear ".concat(newGuestName, ",\n  \n      I hope this message finds you well. I wanted to reach out to inform you that unfortunately, ").concat(originalGuestName, " is unable to join us for dinner on ").concat(invitation.date, ". While we will miss their company, we would love for you to join us in their place.\n  \n      Your presence would be greatly appreciated, and we believe your company will add a wonderful touch to the evening. The dinner will still take place at ").concat(invitation.location, " at ").concat(invitation.time, ". Please let me know at your earliest convenience if you are able to attend.\n  \n      We look forward to sharing a delightful evening with you and appreciate your flexibility.\n  \n      Best regards,\n      ").concat(invitation.guestName, "\n    ");
    var highlightedMessage = invitationMessage.replace(new RegExp(originalGuestName, 'g'), "\u001B[33m".concat(originalGuestName, "\u001B[0m"));
    return highlightedMessage;
}
// Example usage with Sanober as the original guest and Hira as the new guest
var originalInvitation = {
    guestName: "Sanober",
    date: "February 25, 2024",
    location: "XYZ Restaurant",
    time: "7:00 PM",
};
var newGuestName = "Hira";
// Output the updated invitation message with highlighted old guest name
console.log(sendUpdatedInvitation(newGuestName, originalInvitation.guestName, originalInvitation));
