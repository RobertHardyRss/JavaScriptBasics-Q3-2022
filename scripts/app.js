/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

let x = 100;
let y = 200;
let width = 200;
let height = width;

ctx.fillStyle = "red";
while (y < canvas.height) {
	ctx.fillRect(x, y, width, height);
	y += 10;
	x += 10;
}
