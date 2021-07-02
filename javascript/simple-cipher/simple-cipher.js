export class Cipher {
	constructor(cipherKey) {
		if (cipherKey === undefined) {
			this.cipherKey = "";
			for (let i = 0; i < 120; i++) {
				this.cipherKey += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
			}
		} else this.cipherKey = cipherKey;
	}

	encode(plainText) {
		let cipherKey = this.cipherKey;
		while (this.cipherKey.length < plainText.length) {
			this.cipherKey += cipherKey;
		}
		return [...plainText]
			.map((element, i) => {
				return String.fromCharCode(((element.charCodeAt(0) + this.cipherKey.charCodeAt(i) - 2 * 97) % 26) + 97);
			})
			.join("");
	}

	decode(encodedString) {
		let cipherKey = this.cipherKey;
		while (this.cipherKey.length < encodedString.length) {
			this.cipherKey += cipherKey;
		}
		return [...encodedString]
			.map((element, i) => {
				return String.fromCharCode(((element.charCodeAt(0) - this.cipherKey.charCodeAt(i) + 26) % 26) + 97);
			})
			.join("");
	}

	get key() {
		return this.cipherKey;
	}
	set key(val) {
		this.cipherKey = val;
	}
}
