function* getTriplets({ minFactor = 3, sum, maxFactor = sum / 2 }) {
	let thirdNum;
	for (let firstNum = minFactor; firstNum < sum / 3; firstNum++) {
		for (let secondNum = firstNum + 1; secondNum < maxFactor; secondNum++) {
			thirdNum = sum - (firstNum + secondNum);
			if (
				thirdNum > secondNum &&
				thirdNum < maxFactor &&
				firstNum * firstNum + secondNum * secondNum === thirdNum * thirdNum
			) {
				yield new Triplet(firstNum, secondNum, thirdNum);
			}
		}
	}
}

export const triplets = (args) => [...getTriplets(args)];
class Triplet {
	constructor(...sides) {
		this.toArray = () => sides;
	}
}
