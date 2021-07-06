export const classify = (number) => {
	if (number <= 0) throw new Error("Classification is only possible for natural numbers.");
	if (number === 1) return "deficient";
	let sumOfFactors = 1;
	for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
		if (number % i === 0) {
			sumOfFactors += i + (i * i !== number && number / i);
		}
	}
	return sumOfFactors === number ? "perfect" : sumOfFactors > number ? "abundant" : "deficient";
};
