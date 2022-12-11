export default class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`
	}

	coupleWith(person) {
		if (!this.isCoupledWith(person)) {
			this.spouse = person
			person.coupleWith(this)
		}
	}

	isCoupled() {
		return this.spouse !== undefined && this.spouse !== null
	}

	isCoupledWith(person) {
		return this.spouse === person
	}
}