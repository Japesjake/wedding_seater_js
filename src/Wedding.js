export default class Wedding {
    constructor(people, tables) {
        this.people = people
        this.tables = tables
    assignRandom() {
        for (let table of tables) {
            for (let i; i < people.length; i++)
            table.addPerson(people[i])
        }
    }
    }
}
    assign() {
        this.assignRandom()
    }
}