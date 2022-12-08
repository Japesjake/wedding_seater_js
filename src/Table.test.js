import Table from './Table'
import Person from './Person'

describe('Table', () => {
    it('should return true if table is full', () => {
        const table = new Table(
            1,
            [new Person('John', 'Doe')]
        )
        expect(table.isFull()).toBe(true)
    })
    it('should return true if seats available', () => {
        const table = new Table(
            3,
            [
                new Person('John', 'Doe'),
                new Person('Jane', 'Doe')
            ]
        )
        expect(table.availableSeats()).toBe(1)
    })
    it('should return true if person is added.', () => {
        const table = new Table(1)
        const person = new Person('John', 'Doe')
        table.addPerson(person)
        expect(table.people).toStrictEqual([person])
    })
})