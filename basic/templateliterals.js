// Strings and Template Literals
const firstName = 'Jean';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jean = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jean);

const jeanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jeanNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);