export const primeFactors = (naturalNumber) => {
	let primeFactors = [];
	for (let i = 2; i * i <= naturalNumber; i++) {
		while (naturalNumber % i === 0) {
			primeFactors.push(i);
			naturalNumber /= i;
		}
	}
	if (naturalNumber > 1) primeFactors.push(naturalNumber);
	return primeFactors;
};
