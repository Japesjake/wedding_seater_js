import { tests } from './tests'
export default class Wedding {
    constructor(people, tables) {
        this.people = people
        this.tables = tables
    }
    removePerson (id) {
        this.people.splice(id, 1)
    }
    getAssignedPeople () {
        let array = []
        for (let table of this.tables) {
            for (let person of table.people) {
                array.push(person)
            }
        }
        return array
    }
    areFull () {
        for (let table of this.tables) {
            if (!table.isFull()) {
                return false
            }
        }
        return true
    }
    wildAssign() {
        while (this.people != [] && !this.areFull()) {
            for (let i = 0; i < this.tables.length; i++) {
                let assigned = this.tables[i].addPerson(this.people[0])
                if (assigned) {
                    this.removePerson(0)
                }
            }
        }
    }
}