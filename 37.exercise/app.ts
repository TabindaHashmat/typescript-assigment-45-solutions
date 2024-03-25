function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
    console.log(`Summary: A ${size}-sized shirt with the message "${message}" will be printed.`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt('Medium');

// Make a custom-sized shirt with a different message
makeShirt('Small', 'Custom message for a Small-sized shirt');
