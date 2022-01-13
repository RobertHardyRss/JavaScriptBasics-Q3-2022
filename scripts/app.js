/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

console.log("Hello world!");

// this is setting a variable suit to the string spades
let suit = "spades"; // string
let face = "queen";
let value = 10; // number

let isFace = true; //boolean

let aceOfSpades = {
	// object
	suit: "spades",
	face: "ace",
	value: 1,
	isFace: false,
};

console.log(aceOfSpades.toString());

// single line comment

/* 
this is a
multiline comment
*/

// arrays are collections of data

let agesOfTable1 = [13, 23, 33]; // array
console.log(agesOfTable1[2]);

// let myMoney = "I want lots and lots of it $$$";
// console.log(myMoney.toUpperCase());
// console.log("I loke mo money".length);

let namesAndAges = ["Hunter", 13, "Patrick", 14, "Tanner", 14.8];

namesAndAges.forEach((n) => {
	console.log(n);
});

let over14 = agesOfTable1.filter((n) => n > 14);

console.log(over14);
