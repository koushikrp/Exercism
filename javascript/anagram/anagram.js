const sortString = (word) => [...word].sort().join("");
export const findAnagrams = (word, candidates) => {
	const lowerWord = word.toLowerCase();
	const sortedWord = sortString(lowerWord);
	return candidates.filter((candidate) => {
		const lowerCandidate = candidate.toLowerCase();
		return lowerCandidate !== lowerWord && sortString(lowerCandidate) === sortedWord;
	});
};
