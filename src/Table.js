export default class Table {
    constructor(size, people = []) {
        this.size = size
        this.people = people
    }
    isFull() {
        if (this.people.length == this.size) {
            return true
        }
        return false
    }
    availableSeats() {
        return this.size - this.people.length
    }
    // returns true if person is added.
    addPerson(person) {
        if (!this.isFull()) {
            this.people.push(person)
            return true
        }
    }
    isOver() {
        if (this.size < this.people.length) {
            return true
        }
        return false
    }
}

