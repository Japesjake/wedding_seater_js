import { tests } from './tests'
export default class Wedding {
    constructor(people, tables) {
        this.people = people
        this.tables = tables
    }
    wildAssign() {
        for (let i = 0; i < this.people.length; i++) {
            for (let j = 0; j < this.tables.length; j++) {
                this.tables[j].addPerson(this.people[i])
                this.people.splice(i)
            }
        }
    }
    assign() {
        this.wildAssign()
    }
}