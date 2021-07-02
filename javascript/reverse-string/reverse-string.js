export const reverseString = (inputString) => {
	return Array.from(inputString)
		.map((_, index) => inputString[inputString.length - 1 - index])
		.join("");
};
