export const countWords = (phrase) =>
	phrase
		.toLowerCase()
		.replace(/[^\w']/gi, " ")
		.replace(/('\s)|(\s')|('$)/gi, " ")
		.split(/\s+/)
		.filter((c) => c !== "")
		.reduce(
			(ans, word) => ({
				...ans,
				[word]: ~~ans[word] + 1,
			}),
			{}
		);
