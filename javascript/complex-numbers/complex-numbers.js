export class ComplexNumber {
	$a;
	$b;
	constructor(a, b) {
		this.$a = a;
		this.$b = b;
	}

	get real() {
		return this.$a;
	}

	get imag() {
		return this.$b;
	}

	add(anotherCN) {
		return new ComplexNumber(this.real + anotherCN.real, this.imag + anotherCN.imag);
	}

	sub(anotherCN) {
		return new ComplexNumber(this.real - anotherCN.real, this.imag - anotherCN.imag);
	}

	div(anotherCN) {
		return new ComplexNumber(
			(this.real * anotherCN.real + this.imag * anotherCN.imag) / (anotherCN.real ** 2 + anotherCN.imag ** 2),
			(this.imag * anotherCN.real - this.real * anotherCN.imag) / (anotherCN.real ** 2 + anotherCN.imag ** 2)
		);
	}

	mul(anotherCN) {
		return new ComplexNumber(
			this.real * anotherCN.real - this.imag * anotherCN.imag,
			this.imag * anotherCN.real + this.real * anotherCN.imag
		);
	}

	get abs() {
		return Math.floor(Math.sqrt(this.real ** 2 + this.imag ** 2));
	}

	get conj() {
		return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
	}

	get exp() {
		return new ComplexNumber(Math.E ** this.real * Math.cos(this.imag), Math.E ** this.real * Math.sin(this.imag));
	}
}
