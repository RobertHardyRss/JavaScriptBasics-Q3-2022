/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

class Square {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.width = 200;
		this.height = this.width;
		this.color = color;
		this.yDirection = 1;
		this.xDirection = 1;
	}

	update() {
		// bounce off the bottom
		if (this.y + this.height >= canvas.height) {
			this.xDirection = -1;
		}

		// bounce off the top
		if (this.y <= 0) {
			this.yDirection = 1
		}

		// bounces off the right
		if (this.x + this.width >= canvas.width) {
			this.xDirection = -1;
		}

		// bounces off the left
		if (this.x <= 0) {
			this.xDirection = 1;
		}
		this.y += 10 * this.yDirection;
		this.x += 10 * this.xDirection;
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

let square1 = new Square(100, 200, "red");
let square2 = new Square(20, 500, "blue");

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	square1.update();
	square2.update();

	square1.draw();
	square2.draw();

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
