/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

console.log("Hello world!");

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
