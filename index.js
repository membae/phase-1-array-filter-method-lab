// Code your solution here
// index.js

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Example usage:
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const matchingDrivers = findMatching(drivers, 'bobby');
  console.log(matchingDrivers); // Output: ['Bobby', 'bobby']
  
  module.exports = findMatching;
  // index.js

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Example usage:
  const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const matchingDriver = fuzzyMatch(driver, 'Sa');
  console.log(matchingDriver); // Output: ['Sammy', 'Sally', 'Sarah']
  
  module.exports = fuzzyMatch;
  
  // index.js

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Example usage:
  const driverss = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'Houston' },
    { name: 'Sarah', hometown: 'Phoenix' },
    { name: 'bobby', hometown: 'Dallas' }
  ];
  
  const matchingDriverss = matchName(driverss, 'Bobby');
  console.log(matchingDriverss); 
  // Output: [{ name: 'Bobby', hometown: 'New York' }, { name: 'bobby', hometown: 'Dallas' }]
  
  module.exports = matchName;
  