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
    wildAssign() {
        while (this.people != [] && !this.areFull()) {
            for (let table of this.tables) {
                let person = this.people[0]
                if (person.isCoupled()) {
                    for (let i = 0; i < this.people; i++) {
                        if (spouse.isCoupledWith(person)){
                            let assigned = spouse.assignTo(table)
                            if (assigned) {
                                this.removePersonById(i)
                            }
                        }

                    }
                }
                let assigned = person.assignTo(table)
                if (assigned) {
                    this.removePersonById(0)
                }
            }
        }
    }
}