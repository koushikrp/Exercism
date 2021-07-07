export class Palindromes {
	static isPalindrome(word) {
		let start = 0,
			end = word.length - 1;
		while (start < end) {
			if (word[start] !== word[end]) return false;
			start++;
			end--;
		}
		return true;
	}

	static generate({ maxFactor, minFactor }) {
		if (minFactor > maxFactor) throw new Error("min must be <= max");

		let ans = {
			smallest: {
				value: 1e9,
				factors: [],
			},
			largest: {
				value: -1e9,
				factors: [],
			},
		};

		for (let i = minFactor; i <= maxFactor; i++) {
			for (let j = i; j <= maxFactor; j++) {
				if (Palindromes.isPalindrome(String(i * j))) {
					if (i * j < ans.smallest.value) {
						ans.smallest.value = i * j;
						ans.smallest.factors = [[i, j]];
					} else if (i * j === ans.smallest.value) {
						ans.smallest.factors.push([i, j]);
					}
					if (i * j === ans.largest.value) ans.largest.factors.push([i, j]);
					else if (i * j > ans.largest.value) {
						ans.largest.value = i * j;
						ans.largest.factors = [[i, j]];
					}
				}
			}
		}
		if (ans.smallest.value === 1e9) ans.smallest.value = null;
		if (ans.largest.value === -1e9) ans.largest.value = null;
		return ans;
	}
}
