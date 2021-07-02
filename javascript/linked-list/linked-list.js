function node(value) {
	this.prev = null;
	this.next = null;
	this.val = value;
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	push(value) {
		let newNode = new node(value);
		if (this.tail === null) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = this.tail.next;
		}
	}

	pop() {
		if (this.tail === null) {
			throw new Error("Cannot pop from Empty Array!");
		}
		let toRemove = this.tail.val;
		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
			return toRemove;
		}
		this.tail = this.tail.prev;
		this.tail.next = null;
		return toRemove;
	}

	unshift(value) {
		let newNode = new node(value);
		if (this.head === null) this.head = this.tail = newNode;
		else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = this.head.prev;
		}
	}

	shift() {
		if (this.head === null) {
			throw new Error("Cannot unshift from empty list!");
		}
		let toRemove = this.head.val;
		if (this.head === this.tail) {
			this.head = this.tail = null;
			return toRemove;
		}
		this.head = this.head.next;
		this.head.prev = null;
		return toRemove;
	}

	delete(value) {
		if (this.head === null) {
			throw new Error("Cannot unshift from empty list!");
		}
		if (this.head === this.tail && this.head.val === value) {
			this.head = this.tail = null;
			return;
		}
		if (this.head.val === value) {
			this.head = this.head.next;
			this.head.prev = null;
		}
		let temp = this.head;
		while (temp !== null && temp.val !== value) temp = temp.next;
		if (temp !== null) {
			if (temp == this.tail) this.tail = temp.prev;
			temp.prev.next = temp.next;
			if (temp.next) temp.next.prev = temp.prev;
		}
	}

	count() {
		if (this.head === null) return 0;
		let cntOfNodes = 0;
		let temp = this.head;
		while (temp !== this.tail) {
			cntOfNodes++;
			temp = temp.next;
		}
		return cntOfNodes + 1;
	}
}
