// Example array of guests
var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
// Function to generate dinner invitations
function generateInvitations(guests) {
    var invitations = [];
    for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
        var guest = guests_1[_i];
        var invitation = "Dear ".concat(guest, ", you are invited to dinner. We look forward to having you!");
        invitations.push(invitation);
    }
    return invitations;
}
// Generate dinner invitations for each guest
var dinnerInvitations = generateInvitations(guestList);
// Output the invitations
dinnerInvitations.forEach(function (invitation, index) {
    console.log("Invitation ".concat(index + 1, ": ").concat(invitation));
});
