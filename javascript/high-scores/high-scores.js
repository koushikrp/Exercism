export class HighScores {
	constructor(scoreList) {
		this.scoreList = scoreList;
	}

	get scores() {
		return [...this.scoreList];
	}

	get latest() {
		return this.scoreList[this.scoreList.length - 1];
	}

	get personalBest() {
		return Math.max(...this.scoreList);
	}

	get personalTopThree() {
		return [...this.scoreList].sort((a, b) => b - a).filter((element, index) => index < 3);
	}
}
