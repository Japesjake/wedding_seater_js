import { tests } from './tests'
export default class Wedding {
    constructor(people, tables) {
        this.people = people
        this.tables = tables
    }
    removePersonById (id) {
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
    assignCouple(person, table) {
        for (let i = 0; i < this.people.length; i++) {
            let spouse = this.people[i]
            if (spouse.isCoupledWith(person)) {
                // checks to see if couple can be added to table without exceeding table size.
                if (table.people.length < table.size - 1) {
                    // assignTo() returns true if person is sucessfully added to the table.
                    let assigned = person.assignTo(table)
                    let assigned2 = spouse.assignTo(table)
                    // and if they are assigned
                    if (assigned && assigned2) {
                        this.removePersonById(i)
                        this.removePersonById(0)
                    }
                }
            }
        }
    }
    assignPerson(person, table) {
        let assigned = person.assignTo(table)
        if (assigned) {
            this.removePersonById(0)
        }
    }
    wildAssign() {
        let person = true
        // counter to break if while loop iterates too many times.
        let count = 0
        while (this.people.length != 0 && !this.areFull() && count != 50) {
            count += 1
            for (let table of this.tables) {
                let person = this.people[0]
                if (person) {
                    console.log(person)
                    if (person.isCoupled()) {
                        this.assignCouple(person, table)
                    } else {
                        this.assignPerson(person, table)
                    }
                }
            }
        }
        if (count === 50) {console.log('breaks after 50 runs.')}
    }
}