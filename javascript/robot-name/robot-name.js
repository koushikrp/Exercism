export class Robot {
	constructor() {
		this.realName = Robot.createRandomUniqueName();
	}
	reset() {
		this.realName = Robot.createRandomUniqueName();
	}
	get name() {
		return this.realName;
	}
	set name(s) {
		throw new Error("Cannot modify private variables");
	}
}
Robot.createRandomUniqueName = () => {
	let randomName;
	do {
		randomName = String.fromCharCode(Math.floor(Math.random() * 26) + 65, Math.floor(Math.random() * 26) + 65);
		randomName +=
			String(Math.floor(Math.random() * 10)) +
			String(Math.floor(Math.random() * 10)) +
			String(Math.floor(Math.random() * 10));
	} while (Robot.usedNames.has(randomName));

	Robot.usedNames.add(randomName);
	return randomName;
};
Robot.usedNames = new Set();
Robot.releaseNames = () => {};
