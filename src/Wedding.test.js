import Table from './Table'
import Person from './Person'
import Wedding from './Wedding'
import { tests } from './tests.js'
function initObjects() {
    let man = new Person('John', 'Doe')
    let rando = new Person('Rando', 'Williams')
    let woman = new Person('Jane', 'Doe')
    man.coupleWith(woman)
    let table = new Table(1)
    let table2 = new Table(2)
    return { man, rando, woman, table, table2 }
}
describe('Wedding', () => {
    it('should return true if unassigned people array is empty after wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe')],[new Table(1)])
        wedding.wildAssign()
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if person is removed', () => {
        const person = new Person('Jane', 'Doe')
        const wedding = new Wedding([new Person('John', 'Doe'), person], [])
        wedding.removePersonById(0)
        expect(wedding.people).toStrictEqual([person])
    })
    it('should return true if table is maxed out after wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(1), new Table(1)])
        wedding.wildAssign()
        expect(wedding.tables[0].isFull()).toBe(true)
    })
    it('should return true if person is not added when table is full', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        let rando2 = new Person('James', 'Smith')
        const wedding = new Wedding([rando, rando2],[table, table2])
        wedding.wildAssign()
        expect(table.people).toStrictEqual([rando])
        expect(table2.people).toStrictEqual([rando2])
        // expect(wedding.people).toStrictEqual([])
    })
    it('should return true if the people before wild assignment are all accounted for in tables after wild assignment', () => {
        const wedding = new Wedding([new Person('John', 'Doe'), new Person('Jane', 'Doe')], [new Table(2)])
        let unassigned = [...wedding.people]
        wedding.wildAssign()
        let assigned = wedding.getAssignedPeople()
        expect(unassigned).toStrictEqual(assigned)
    })
    it('should return true if person is assigned to table', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        const wedding = new Wedding([man, woman],[table, table2])
        wedding.assignPerson(man, table2)
        expect(table2.people).toStrictEqual([man])
    })
    it('should return true if couple is assigned together with assignCouple method', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        const wedding = new Wedding([man, woman],[table, table2])
        wedding.assignCouple(man, table2)
        expect(table2.people).toStrictEqual([man, woman])
        expect(table.people).toStrictEqual([])
    })
    it('should return true if couple is not assigned to separate tables', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        const wedding = new Wedding([man, rando, woman],[table, table2])
        wedding.wildAssign()
        expect(table.people).toStrictEqual([rando])
        expect(table2.people).toStrictEqual([man, woman])
    })
    it('should return true if couple is not assigned to table of size 1', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        const wedding = new Wedding([man, woman],[table, table2])
        wedding.wildAssign()
        expect(table2.people).toStrictEqual([man, woman])
        expect(wedding.people).toStrictEqual([])
    })
    it('should return true if couple is not assigned to table of size 1', () => {
        let { man, rando, woman, table, table2 } = initObjects()
        const wedding = new Wedding([man, woman],[table, table2])
        wedding.wildAssign()
        expect(table2.people).toStrictEqual([man, woman])
        expect(wedding.people).toStrictEqual([])
    })
})