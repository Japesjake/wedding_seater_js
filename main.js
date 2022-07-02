import {Table} from "./scripts/Table.js"
import {Person} from "./scripts/Person.js"
import {Wedding} from "./scripts/Wedding.js"

var table = new Table(8,0)
console.log(table.max_seats, table.id)
var person = new Person("JP", 29, "single")
console.log(person.name, person.age, person.spouse)