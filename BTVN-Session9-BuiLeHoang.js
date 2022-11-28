const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ]
  

////////////////////////some/every/////////////////////
// Q1 Does any inventor have the letter 'y' in their name?
res = inventors.some (function(name) {
return name.includes ("y")
})
console.log (res)

//Q2 Does every inventor have the letter 'e' in their name?
res = inventors.every (function(name) {
  return name.includes ("e")
  })
  console.log (res)

// Q3 Does every inventor have first name that's longer than 4 characters?

res = inventors.every (function(name) {
  return name.split("")[0] > 4
  })
  console.log (res)

/////////////////filter////////////////////////////////////
// Q4 Print out an array of the inventors whose name starts with 'A'.
res = inventors.filter (function(name) {
return name[0] === "A"
})
console.log (res)

// Q5 Print out an array of the inventors whose name contains 'n'.
res = inventors.filter (function(name) {
  return name.includes ("n")
  })
  console.log (res);
////////////////////find/findIndex///////////////////////
// Q6 Find the inventor that has a middle name.
const space = (name) => {
  var count = 0, i;
  for (i = 0; i<name.length; i++)
  if (name[i] ===" ") {
    count++ };
    return count;
}
res = inventors.find (function(name){
  if (space(name) >= 2) {
return (name) 
}}
);
console.log (res)

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
//Q7  Find the number divisible by 7.
res = numbers.find(function(number){
  if (number !=0) {
    return number%7 ==0;
  }
})
console.log (res)
// Q9 Print out an array of the numbers which are prime.
function checkPrime (number){
var i;
if (number <= 1) {
  return false;
}
for (i = 2; i<number; i++)
if (number%i === 0) {
  return false;
}
return true;
}
res = numbers.filter (function(number)
{
  if (checkPrime(number)) {
    return number;
  }
});
console.log (res)

//   Q10  Print out an array of every number multiplied by 100.
res = numbers.map(function(number){
  if (number !=0) {
    return number*100;
  }
})
console.log (res)
// Q11  Given an array, Write a function to reverse the items in that array.
res = numbers.reverse (function(reverse) {
  return reverse
  })
  console.log (res)