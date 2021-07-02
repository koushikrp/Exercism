export const steps = (inputNumber) => {
	if (inputNumber <= 0) throw new Error("Only positive numbers are allowed");
	let cnt = 0;
	while (inputNumber != 1) {
		if (inputNumber % 2) inputNumber = inputNumber * 3 + 1;
		else inputNumber /= 2;
		cnt++;
	}
	return cnt;
};
