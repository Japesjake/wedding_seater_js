export class Table {
    constructor(max_seats, id) {
        this.max_seats = max_seats
        this.id = id
        this.people = []
    }
    add_person (person) {
        this.people.push(person)
    }
}