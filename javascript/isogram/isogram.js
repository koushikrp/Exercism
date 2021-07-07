export const isIsogram = (phrase) => {
	let newPhrase = [...phrase]
		.filter((letter) => letter.match(/[A-Za-z]/g))
		.join("")
		.toLowerCase();

	return (
		[...newPhrase].reduce((distinctChars, letter) => {
			if (distinctChars.includes(letter) === false) distinctChars.push(letter);
			return distinctChars;
		}, []).length === newPhrase.length
	);
};
