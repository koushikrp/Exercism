export class Triangle {
	constructor(...sides) {
		this.a = sides[0];
		this.b = sides[1];
		this.c = sides[2];
	}
	isTriangle() {
		return (
			this.a > 0 &&
			this.b > 0 &&
			this.c > 0 &&
			this.a <= this.b + this.c &&
			this.b <= this.a + this.c &&
			this.c <= this.a + this.b
		);
	}
	get isEquilateral() {
		if (!this.isTriangle()) return false;
		return this.a === this.b && this.b === this.c;
	}

	get isIsosceles() {
		if (!this.isTriangle()) return false;
		return this.a === this.b || this.b === this.c || this.c === this.a;
	}

	get isScalene() {
		if (!this.isTriangle()) return false;
		return this.a != this.b && this.b != this.c;
	}
}
