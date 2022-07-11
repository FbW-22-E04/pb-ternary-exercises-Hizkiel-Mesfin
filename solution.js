//#1
const isDog = true;

console.log(isDog === true ? "pat, pat" : "find me a dog to pat!");

//#2
const speedLimit = 50;
const yourSpeed = 50;

console.log(
  yourSpeed > speedLimit
    ? "you're going to fast!"
    : "You're driving below the speed limit, Oma"
);

//#3

const age = 23;

console.log(age < 16 ? "serve butter beer" : "serve beer");

//#4

const isStudent = false;

console.log(isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00");

//#5

const okMarie = "cake";

console.log(okMarie === "cake" ? "Let then eat cake" : "Oh, bother");

//#6

const num1 = 30;
const num2 = 939;
const num3 = 40.9;

console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
console.log(num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);
console.log(num3 % 2 === 0 ? `${num3} is even` : `${num3} is odd`);
