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
        for (let i = 0; i < this.people; i++) {
            if (this.people[i].isCoupledWith(person)) {
                let assigned = people[i].assignTo(table)
                console.log(assigned)
                let assigned2 = person.assignTo(table)
                console.log(assigned2)
                if (assigned && assigned2) {
                    this.removePersonById(i)
                    this.removePersonById(0)
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
        // console.log(this.people)
        while (this.people != [] && !this.areFull()) {
            for (let table of this.tables) {
                let person = this.people[0]
                // console.log('updated: ' + this.people)
                if (person.isCoupled()) {
                    this.assignCouple(person, table)
                } else {
                    this.assignPerson(person, table)
                }
            }
        }
    }
}