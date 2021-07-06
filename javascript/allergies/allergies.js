const ITEMS = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"];
export class Allergies {
	constructor(score) {
		// this.allergies = ITEMS.filter((_, i) => (1 << i) & score);
		this.allergies = ITEMS.filter((_, i) => (score >> i) & 1);
	}

	list() {
		return this.allergies;
	}

	allergicTo(allergy) {
		return this.allergies.includes(allergy);
	}
}
