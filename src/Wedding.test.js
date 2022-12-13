import Table from './Table'
import Person from './Person'
import Wedding from './Wedding'
import { tests } from './tests.js'
describe('Wedding', () => {
    it('should return true if unassigned people array is empty after everyone is assigned', () => {
        const wedding = new Wedding([new Person('John', 'Doe')],[new Table(1)])
        wedding.assign()
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if person is removed', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [])
        wedding.removePerson(0)
        expect(wedding.people).toStrictEqual([new Person('Jane', 'Doe')])
    })
    it('should return true if all items are removed from a list', () => {
        let array = [1, 2, 3, 4]
        for (let i = 0; i < array.length; i++) {
            array.splice(0)
        }
        expect(array).toStrictEqual([])
    })
    it('should return true if table is maxed out after assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()
        expect(wedding.tables[0].isFull()).toBe(true)
    })
    it('should return true if tables are not over-filled after assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()
        expect(wedding.tables[0].isOver()).toBe(false)
    })
    it('should return true if person is not added when table is full', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()
        expect(wedding.people.length).toBe(1)
    })
    it('should return true if assigned people getter returns people properly', () => {
        const wedding = new Wedding([],[new Table(1, [new Person('John', 'Doe'), new Person('Jane', 'Doe')])])
        expect(wedding.getAssignedPeople()).toStrictEqual([new Person('John', 'Doe'), new Person('Jane', 'Doe')])
    })
    it('should return true if all assigned people are accounted for when getAssignedPeople method is called', () => {
        const wedding = new Wedding([],[new Table(1, [new Person('John', 'Doe')]), new Table(1, [new Person('Jane', 'Doe')])])
        expect(wedding.getAssignedPeople()).toStrictEqual([new Person('John', 'Doe'), new Person('Jane', 'Doe')])
    })
    it('should return true if everyone is assigned', () => {
        const wedding = new Wedding([])
    })
    it('should return true if the people before assignment are all accounted for in tables', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(2)])
        let unassigned = [...wedding.people]
        wedding.assign()
        let assigned = wedding.getAssignedPeople()
        expect(unassigned).toStrictEqual(assigned)
    })
})