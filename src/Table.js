export default class Table {
    constructor(people = [], size = 0) {
        this.people = people
        this.size = size
    }
    isFull() {
        if (this.people.length >= this.size) {
            return true
        }
    }
    availableSeats() {
        return this.size - this.people.length
    }
    addPerson(person) {
        this.people.push(person)
    }
}

