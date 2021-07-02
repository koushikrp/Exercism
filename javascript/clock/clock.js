export class Clock {
	#hrs;
	#mns;
	constructor(hours = 0, minutes = 0) {
		this.#hrs = hours;
		this.#mns = minutes;
		this.#hrs += Math.floor(this.#mns / 60);
		this.normaliseUnderflowedMinutes();
		this.normaliseOverflowedMinutes();
		this.normaliseUnderflowedHours();
		this.normaliseOverflowedHours();
	}
	padZero = (time) => (time < 10 ? "0" + time : time.toString());
	normaliseOverflowedMinutes() {
		this.#mns %= 60;
	}
	normaliseUnderflowedMinutes() {
		this.#mns -= Math.floor(this.#mns / 60) * 60;
	}
	normaliseOverflowedHours() {
		this.#hrs %= 24;
	}
	normaliseUnderflowedHours() {
		this.#hrs -= 24 * Math.floor(this.#hrs / 24);
	}
	toString = () => this.padZero(this.#hrs) + ":" + this.padZero(this.#mns);

	plus = (enteredMins) => new Clock(this.#hrs, this.#mns + enteredMins);

	minus = (enteredMins) => this.plus(-enteredMins);

	equals = (anotherClock) => this.toString() === anotherClock.toString();
}
