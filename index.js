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
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Milsestone2
console.log(inventors.filter((name)=>name.charAt(0)==="A"));

console.log(inventors.filter((name)=>name.includes("n")));

let SameCharInARow1 = function (name) {
  for (i = 0 ;i < name.length-1; i++) {
if (name.charAt(i) === name.charAt(i+1)){
      return true}
}}

newArray = inventors.filter((name)=>SameCharInARow1(name));
console.log(newArray);

console.log(numbers.filter((num) => num % 2 ===1));
console.log(numbers.filter((num) => num/10 >= 1));
console.log(numbers.filter((num) => num === 1 || num === 2 || num === 3 || num === 5 || (num > 5 && num%2 > 0 && num%3 > 0 && num%5 > 0)));

//Milsestone3

function firstname (fullname){
  return fullname.split(' ')[0];
}

console.log(inventors.map(firstname))