const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayNumber = ["first", "second", "third", "fourth", "fifth"];

export const meetup = (year, month, repetition, day) => {
	let cntOfDay = 0,
		lastDate;

	//Leap Year
	if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) daysInMonth[1] = 29;
	else daysInMonth[1] = 28;

	//Iterate for all dates of the month
	for (let i = 1; i <= daysInMonth[month - 1]; i++) {
		let curDate = new Date(year, month - 1, i);
		if (days[curDate.getDay()] === day) {
			if (repetition === "teenth") {
				if (i >= 13 && i <= 19) {
					return curDate;
				}
			} else if (repetition === dayNumber[cntOfDay]) {
				return curDate;
			}
			lastDate = curDate;
			cntOfDay++;
		}
	}
	return lastDate;
};
