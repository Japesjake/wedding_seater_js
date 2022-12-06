export default class Household {
	constructor(primary, spouse = null, children = []) {
		this.primary = primary
		this.spouse = spouse
		this.children = children
	}

	get count() {
		// There is always one primary person, but there may or may not be a spouse or children.
		let count = 1
		// If spouse is not null, then add them.
		if (this.spouse !== null) {
			count++
		}

		// Add the number of children.
		count += this.children.length

		return count
	}
}
