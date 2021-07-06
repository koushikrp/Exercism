const drops = {
	3: "Pling",
	5: "Plang",
	7: "Plong",
};
export const convert = (raindrop) =>
	Object.keys(drops)
		.filter((drop) => raindrop % drop === 0)
		.map((key) => drops[key])
		.join("") || raindrop.toString();
