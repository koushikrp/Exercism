export const parse = (phrase) =>
	phrase
		.split(/[\s\-_]+/g)
		.map((word) => word[0])
		.join("")
		.toUpperCase();
