export class GradeSchool {
	constructor() {
		this.register = {};
	}
	roster() {
		let changedRegister = Object.fromEntries(Object.entries(this.register).sort());
		return JSON.parse(JSON.stringify(changedRegister));
	}

	add(studentName, gradeNum) {
		if (!(gradeNum in this.register)) this.register[gradeNum] = [];
		for (let property in this.register) {
			let eleIndex = this.register[property].indexOf(studentName);
			if (eleIndex !== -1) this.register[property].splice(eleIndex, 1);
		}
		this.register[gradeNum].push(studentName);
		this.register[gradeNum].sort();
	}

	grade(gradeNum) {
		// if (!(gradeNum in this.register)) return [];
		return [...(this.register[gradeNum] || [])];
	}
}
