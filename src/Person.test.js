import Person from './Person'
import Table from './Table'

describe('Person', () => {
	it('should return the full name', () => {
		const person = new Person('John', 'Doe')
		expect(person.fullName).toBe('John Doe')
	})
	it('should return true if man and woman are coupled', () => {
        const man = new Person('John', 'Doe') 
		const woman = new Person('Jane', 'Doe')
        man.coupleWith(woman)
        expect(man.isCoupled() && woman.isCoupled()).toBe(true)
	})
	it('should return true if man is coupled with woman', () => {
        const man = new Person('John', 'Doe') 
		const woman = new Person('Jane', 'Doe')
        man.coupleWith(woman)
        expect(man.isCoupledWith(woman) && woman.isCoupledWith(man)).toBe(true)
	})
	it('should return true if person is assigned to table', () => {
        const person = new Person('John', 'Doe')
		const table = new Table(1)
		person.assignTo(table)
        expect(table.people).toStrictEqual([new Person('John', 'Doe')])
	})
})
