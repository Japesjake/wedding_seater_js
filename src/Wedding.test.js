import Table from './Table'
import Person from './Person'
import Wedding from './Wedding'
import { tests } from './tests.js'
describe('Wedding', () => {
    it('should return true if unassigned people array is empty atfer wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe')],[new Table(1)])
        wedding.wildAssign()
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if person is removed', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [])
        wedding.removePerson(0)
        expect(wedding.people).toStrictEqual([new Person('Jane', 'Doe')])
    })
    it('should return true if table is maxed out after wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.wildAssign()
        expect(wedding.tables[0].isFull()).toBe(true)
    })
    it('should return true if person is not added when table is full', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.wildAssign()
        expect(wedding.people.length).toBe(1)
    })
    it('should return true if assigned people getter returns people properly', () => {
        const wedding = new Wedding([],[new Table(2, [new Person('John', 'Doe'), new Person('Jane', 'Doe')]), new Table(2, [new Person('John', 'Doe'), new Person('Jane', 'Doe')])])
        expect(wedding.getAssignedPeople()).toStrictEqual([new Person('John', 'Doe'), new Person('Jane', 'Doe'), new Person('John', 'Doe'), new Person('Jane', 'Doe')])
    })
    it('should return true if all assigned people are accounted for when getAssignedPeople method is called', () => {
        const wedding = new Wedding([],[new Table(1, [new Person('John', 'Doe')]), new Table(1, [new Person('Jane', 'Doe')])])
        expect(wedding.getAssignedPeople()).toStrictEqual([new Person('John', 'Doe'), new Person('Jane', 'Doe')])
    })
    it('should return true if the people before wild assignment are all accounted for in tables after wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(2)])
        let unassigned = [...wedding.people]
        wedding.wildAssign()
        let assigned = wedding.getAssignedPeople()
        expect(unassigned).toStrictEqual(assigned)
    })
})