// Basic Operator

// Math Operators
const now = 2027;
const ageJean = now - 2000;
const ageSarah = now - 2003;
console.log(ageJean, ageSarah);
console.log(ageJean * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jean';
const lastName = 'Bosco';
console.log(firstName + ' ' + lastName);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x); 

// Comparison Operator >, <, >=, <=
console.log(ageJean > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 2003 > now - 2000);

// Operator Procedence
let a, b;

a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageJean + ageSarah) / 2;
console.log(ageJean, ageSarah, averageAge);
