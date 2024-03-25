// Example array of names
const people: string[] = ["Alia", "Baby", "sana", "Dania", "esha"];

// Function to generate personalized greeting messages
function generateGreetingMessages(names: string[]): string[] {
  const greetingMessages: string[] = [];

  for (const name of names) {
    const greetingMessage: string = `Hello, ${name}! Welcome to our event.`;
    greetingMessages.push(greetingMessage);
  }

  return greetingMessages;
}

// Generate personalized greeting messages for each person
const greetingMessages: string[] = generateGreetingMessages(people);

// Output the greeting messages
greetingMessages.forEach((message, index) => {
  console.log(`Person ${index + 1}: ${message}`);
});
