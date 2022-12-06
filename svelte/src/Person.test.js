import Person from './Person'

describe('Person', () => {
	it('should return the full name', () => {
		const person = new Person('John', 'Doe')
		expect(person.fullName).toBe('John Doe')
	})
})