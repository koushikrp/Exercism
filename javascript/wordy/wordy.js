export const answer = (wordProblem) => {
	// let regex = /^What is [-+]?\d+( (plus|minus|multiplied by|divided by) [-+]?\d+)*\?$/;
	wordProblem = wordProblem
		.replace(/plus/g, "+")
		.replace(/minus/g, "-")
		.replace(/multiplied by/g, "*")
		.replace(/divided by/g, "/")
		.replace(/[A-Za-z\? ]/g, "");
	try{
		eval(wordProblem);
		throw new Error("Syntax error");
	}
	if(eval===undefined){
		throw new Error("Unknown operation");
	}
	if(eval)
};
