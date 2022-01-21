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

let yDirection = 1;
let xDirection = 1;

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(x, y, width, height);

	if (y + height >= canvas.height) {
		yDirection = -1;
	}

	if (x + width >= canvas.width) {
		xDirection = -1;
	}

	y += 10 * yDirection;
	x += 10 * xDirection;

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
