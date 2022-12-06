import Household from './Household'
import Person from './Person'

describe('Household counts', () => {
	it('should return the number of people in the household', () => {
		const household = new Household(
			new Person('John', 'Doe'),
			new Person('Jane', 'Doe'),
			[
				new Person('John', 'Doe Jr.'),
				new Person('Jane', 'Doe Jr.')
			]
		)
		expect(household.count).toBe(4)
	})

	// Now with no spouse, but children.
	it('should return the number of people in the household', () => {
		const household = new Household(
			new Person('John', 'Doe'),
			null,
			[
				new Person('John', 'Doe Jr.'),
				new Person('Jane', 'Doe Jr.')
			]
		)
		expect(household.count).toBe(3)
	})

	// Now with a spouse but no children.
	it('should return the number of people in the household', () => {
		const household = new Household(
			new Person('John', 'Doe'),
			new Person('Jane', 'Doe')
		)
		expect(household.count).toBe(2)
	})

	// Now with just a single primary person.
	it('should return the number of people in the household', () => {
		const household = new Household(
			new Person('John', 'Doe')
		)
		expect(household.count).toBe(1)
	})

	// Now a couple with no children.
	it('should return the number of people in the household', () => {
		const household = new Household(
			new Person('John', 'Doe'),
			new Person('Jane', 'Doe')
		)
		expect(household.count).toBe(2)
	})
})

describe('Household couples', () => {
	it('should return false if there is no spouse', () => {
		const john = new Person('John', 'Doe')
		new Household(john)
		expect(john.isCoupled()).toBe(false)
		const rando = new Person('Random', 'Person')
		expect(rando.isCoupled()).toBe(false)
		expect(john.isCoupledWith(rando)).toBe(false)
	})

	it('should return true if there is a spouse', () => {
		const john = new Person('John', 'Doe')
		const jane = new Person('Jane', 'Doe')
		new Household(john, jane)
		expect(john.isCoupled()).toBe(true)
		expect(jane.isCoupled()).toBe(true)
		expect(john.isCoupledWith(jane)).toBe(true)
		expect(jane.isCoupledWith(john)).toBe(true)
	})
})