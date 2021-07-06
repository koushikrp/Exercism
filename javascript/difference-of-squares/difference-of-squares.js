export class Squares {
	constructor(num) {
		this.n = num;
	}

	get sumOfSquares() {
		return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
	}

	get squareOfSum() {
		return (this.n * this.n * (this.n + 1) * (this.n + 1)) / 4;
	}

	get difference() {
		return this.squareOfSum - this.sumOfSquares;
	}
}
