import { tests } from './tests'
export default class Wedding {
    constructor(people, tables) {
        this.people = people
        this.tables = tables
    }
    wildAssign() {
        for (let person of this.people) {
            for (let table of this.tables) {
                if (this.people.includes(person)){
                    table.addPerson(person)
                    this.removePerson(this.people.indexOf(person))
                }
            }
        }
    }
    assign() {
        this.wildAssign()
    }
    removePerson (id) {
        this.people.splice(id)
    }
    areOver () {
        for (let table of this.tables) {
            if (table.isOver()) {
                return true
            }
        }
        return false
    }
}