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

//                                                                                      Milsestone2
// console.log(inventors.filter((name)=>name.charAt(0)==="A"));

// console.log(inventors.filter((name)=>name.includes("n")));

// let SameCharInARow1 = function (name) {
//   for (i = 0 ;i < name.length-1; i++) {
// if (name.charAt(i) === name.charAt(i+1)){
//       return true}
// }}

// newArray = inventors.filter((name)=>SameCharInARow1(name));
// console.log(newArray);

// console.log(numbers.filter((num) => num % 2 ===1));
// console.log(numbers.filter((num) => num/10 >= 1));
// console.log(numbers.filter((num) => num === 1 || num === 2 || num === 3 || num === 5 || (num > 5 && num%2 > 0 && num%3 > 0 && num%5 > 0)));

//                                                                                    Milsestone3

// function firstname (fullname){
//   return fullname.split(' ')[0];
// }

// console.log(inventors.map(firstname))

// function lengthfulname (fullname){
//   return fullname.length;
// }

// console.log(inventors.map(lengthfulname))

// function firstname (fullname){
//   a = fullname.split(' ')[0].charAt(0);
//   b = fullname.split(' ')[1].charAt(0);
//   return  a + "." + b;
// }

// console.log(inventors.map(firstname))

// console.log(numbers.map(x => x*100))

// let i = 0
// function powerof2 (x) {
//   i++;
//   x = (x/x)*2;
//   x = Math.pow(x,i)
//   return x;
// }

// console.log(numbers.map(powerof2))

//                                                                                   Milsestone4

// newArray = inventors.sort();
// console.log(newArray);

// function sortZA (array){
//   let ArrayZA = new Array;
//   for (let i = array.length-1; i>=0; i--) {
//     ArrayZA.push(array[i]);
//   }
//   return ArrayZA;
// };

// // sortZA(newArray);

// console.log(inventors.sort((x, y) => x.length - y.length))

// console.log(inventors.sort((x, y) => y.length - x.length ))


//                                                                                   Milsestone5

// console.log(numbers.reduce((x, y) => x + y));

// newArray = numbers.filter((num) => num % 2 ===0);

// console.log(newArray.reduce((x, y) => x + y));

// function firstname (fullname){
//   return fullname.split(' ')[0];
// }

// console.log(inventors.map(firstname))

// console.log(inventors.map(firstname).reduce((x, y) => x + y));








//                                                                                    Milsestone6

// console.log(inventors.some((x) => x.includes("y") === false));
// console.log(inventors.every((x) => x.includes("e") === false));

// function firstname (fullname){
//   return fullname.split(' ')[0];
// }

// let FirstnameArray = (inventors.map(firstname));
// console.log(FirstnameArray.every((x) => x.length > 4));






//                                                                                      Milsestone7

// console.log(inventors.find((x)=> x.includes(".")));

// console.log(numbers.find((x)=> x%7 === 0));