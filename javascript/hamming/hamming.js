export const compute = (leftStrand, rightStrand) => {
	if (leftStrand.length === 0 && rightStrand.length) throw new Error("left strand must not be empty");
	if (rightStrand.length === 0 && leftStrand.length) throw new Error("right strand must not be empty");
	if (leftStrand.length !== rightStrand.length) throw new Error("left and right strands must be of equal length");

	return [...leftStrand].reduce((hammingCode, protein, index) => {
		if (protein !== rightStrand[index]) hammingCode++;
		return hammingCode;
	}, 0);
};
