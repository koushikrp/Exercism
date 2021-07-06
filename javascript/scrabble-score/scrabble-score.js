const letterValues = {
	AEIOULNRST: 1,
	DG: 2,
	BCMP: 3,
	FHVWY: 4,
	K: 5,
	JX: 8,
	QZ: 10,
};
export const score = (word) =>
	[...word].reduce((cnt, letter) => {
		Object.keys(letterValues).forEach((letters) => {
			if (letters.includes(letter.toUpperCase())) cnt += letterValues[letters];
		});
		return cnt;
	}, 0);
