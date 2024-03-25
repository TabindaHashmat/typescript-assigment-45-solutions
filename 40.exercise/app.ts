function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with at least three city-country pairs
const location1 = cityCountry('Lahore', 'Pakistan');
const location2 = cityCountry('Tokyo', 'Japan');
const location3 = cityCountry('Sydney', 'Australia');

// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);
