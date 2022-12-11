import Table from './Table'
import Person from './Person'
import Wedding from './Wedding'
import { tests } from './tests.js'
describe('Wedding', () => {
    it.each(tests)('should return true if unassigned people array is empty after assignment', (test) => {
        const wedding = new Wedding(test.people, test.tables)
        wedding.assign()
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if person is removed', () => {
        const wedding = new Wedding([new Person('John', 'Doe')], [new Table(1)])
        wedding.removePerson(0)
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if all items are removed from a list', () => {
        let array = [1, 2, 3, 4]
        for (let i = 0; i < array.length; i++) {
            array.splice(i)
        }
        expect(array).toStrictEqual([])
    })
    it('should return true if table is maxed out after assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()
        expect(wedding.tables[0].isFull()).toBe(true)
    })
    it('should return true if tables are not over-filled', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()

            expect(wedding.areOver()).toBe(false)
    })
    it('should return true if person is not added when table is full', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1)])
        wedding.assign()
        expect(wedding.people.length).toBe(1)
    })
})