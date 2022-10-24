// Logical Operators

/*
// Given that x = 6 and y = 3, the table below explains the logical operators:

Operator	Description	Example	   
&&	and	    (x < 10 && y > 1) is true	
||	or	    (x == 5 || y == 5) is false	
!	not	    !(x == y) is true
*/
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
