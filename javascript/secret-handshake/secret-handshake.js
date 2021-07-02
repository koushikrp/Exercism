export const commands = (number) => {
	let instructions = [],
		curNum = 1;
	let secretMsg = ["wink", "double blink", "close your eyes", "jump"];
	for (let i = 0; i < 4; i++) {
		if (number & curNum) {
			instructions.push(secretMsg[i]);
		}
		curNum <<= 1;
	}
	if (number & curNum) instructions.reverse();
	return instructions;
};
