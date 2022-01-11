/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

console.log("Hello world!");

// this is setting a variable suit to the string spades
let suit = "spades";
let face = "queen";
let value = 10;

let isFace = true;

let aceOfSpades = {
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

let agesOfTable1 = [13, 23, 33];
console.log(agesOfTable1[2]);

let namesAndAges = ["Hunter", 13, "Patrick", 14, "Tanner", 14.8];
