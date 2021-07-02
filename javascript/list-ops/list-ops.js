export class List {
	constructor(items) {
		if (items === undefined) this.values = [];
		else this.values = items;
	}

	append(anotherList) {
		for (const element of anotherList.values) {
			this.values[this.values.length] = element;
			// this.values.push(element);
		}
		return this;
	}

	concat(listOfLists) {
		let newList = new List();
		newList.append(this);
		listOfLists.values.forEach((element) => {
			newList.append(element);
		});
		return newList;
	}

	filter(predicate) {
		let satisfiedItems = new List();
		this.values.forEach((item) => {
			if (predicate(item)) satisfiedItems.values.push(item);
		});
		return satisfiedItems;
	}

	map(mapper) {
		let mappedList = new List();
		this.values.forEach((item) => {
			mappedList.values.push(mapper(item));
		});
		return mappedList;
	}

	length() {
		return this.values.length;
	}

	foldl(foldingFunc, accumulator) {
		this.values.forEach((item) => {
			accumulator = foldingFunc(accumulator, item);
		});
		return accumulator;
	}

	foldr(foldingFunc, accumulator) {
		for (let i = this.values.length - 1; i >= 0; i--) {
			accumulator = foldingFunc(accumulator, this.values[i]);
		}
		return accumulator;
	}

	reverse() {
		let reversedList = new List();
		for (let i = this.values.length - 1; i >= 0; i--) {
			reversedList.values.push(this.values[i]);
		}
		return reversedList;
	}
}
