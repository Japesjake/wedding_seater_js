import Table from './Table'
import Person from './Person'
import Wedding from './Wedding'
import { tests } from './tests.js'
describe('Wedding', () => {
    tests.forEach((test) => {
        it('test ' + String(test[2]) + ': should return true if unassigned people array is empty after assignment', () => {
            const wedding = new Wedding(test[0], test[1])
            wedding.assign()
            expect(wedding.people).toStrictEqual([])
        })
    })
    it('test ' + String(test[2]) + ': should return true if person is removed', () => {
        const wedding = new Wedding([new Person('John', 'Doe')], [new Table(1)])
        wedding.people.shift()
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if all items are removed from a list', () => {
        let array = [1, 2, 3, 4]
        for (let i = 0; i < array.length; i++) {
            array.splice(i)
        }
        expect(array).toStrictEqual([])
    })
})