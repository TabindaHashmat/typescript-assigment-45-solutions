function describeCity(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York', 'USA');
describeCity('Paris');  // Using the default country
