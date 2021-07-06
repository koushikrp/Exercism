export const transform = (lettersPerScore) =>
	// let scorePerLetter = {};
	Object.entries(lettersPerScore).reduce((scorePerLetter, [key, value]) => {
		value.forEach((letter) => (scorePerLetter[letter.toLowerCase()] = parseInt(key)));
		return scorePerLetter;
	}, {});

// return scorePerLetter;

//Using forEach instead of map :
// Object.entries(lettersPerScore).map(([key, value]) =>
// value.forEach((element) => {
// 	scorePerLetter[element.toLowerCase()] = parseInt(key);
// });
// );
