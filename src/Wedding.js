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
    // something wrong in here
    wildAssign() {
        let iteration = 1
        while (this.people != [] && iteration < 100) {
            for (let i = 0; i < this.tables.length; i++) {
                if (this.tables[i].addPerson(this.people[0])) {
                    this.removePerson(0)
                }
                iteration += 1
            }
        }
    }
    assign() {
        this.wildAssign()
    }
}