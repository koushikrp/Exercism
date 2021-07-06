export const valid = (number) => {
	number = number.split(" ").join("");
	if (number.length <= 1) return false;
	if (number.match(/[^\d]/g)) return false;
	return [...number]
		.reverse()
		.map(Number)
		.map((digit, index) => (index % 2 ? 2 * digit : digit))
		.map((digit) => (digit > 9 ? digit - 9 : digit))
		.reduce((sum, digit) => sum + digit, 0) % 10
		? false
		: true;
};
