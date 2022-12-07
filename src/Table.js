export default class Table {
    constructor(size = 0, people = []) {
        this.size = size,
        this.people = people
    }
    isFull() {
        if (this.people.length == this.size) {
            return true
        }
    }
    isOver() {
        return this.size < this.people.length
    }
    availableSeats() {
        return this.size - this.people.length
    }
    addPerson(person) {
        this.people.push(person)
    }
}

