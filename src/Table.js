export default class Table {
    constructor(size, people = []) {
        this.size = size
        this.people = people
    }
    isFull() {
        if (this.people.length == this.size) {
            return true
        }
    }
    availableSeats() {
        return this.size - this.people.length
    }
    addPerson(person) {
        if (!this.isFull()) {
            this.people.push(person)
        }
    }
    isOver() {
        if (this.size < this.people.length) {
            return true
        }
        return false
    }
}

