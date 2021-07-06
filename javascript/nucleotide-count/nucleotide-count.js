export class NucleotideCounts {
	static parse(sequence) {
		// let countOfNucleotides = nucleotides.map(
		// 	(nucleotide) =>
		// 		// [...sequence].reduce((cnt, protein) => (protein === nucleotide ? cnt + 1 : cnt), 0)
		// 		[...sequence].filter((protein) => protein === nucleotide).length
		// );
		// if (countOfNucleotides.reduce((a, n) => a + n, 0) === sequence.length) return countOfNucleotides.join(" ");
		// else throw new Error("Invalid nucleotide in strand");
		const nucleotides = {
			A: 0,
			C: 0,
			G: 0,
			T: 0,
		};
		[...sequence].forEach((nucleotide) => {
			if (nucleotides.hasOwnProperty(nucleotide)) nucleotides[nucleotide]++;
			else throw new Error("Invalid nucleotide in strand");
		});
		return Object.entries(nucleotides)
			.map(([key, value]) => value)
			.join(" ");
	}
}
