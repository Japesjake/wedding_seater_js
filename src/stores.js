import { writable } from 'svelte/store'
import Person from './Person'
import Wedding from './Wedding'

function store (key, defaultValue) {
    if (!localStorage.getItem(key)) {
        var value = defaultValue
    }else{
        var value = JSON.parse(localStorage.getItem(key))
    }
    const write = writable(value)
    return write
}

let defaultValue = new Wedding([new Person('John', 'Doe'), new Person('Bob', 'Miller')]);
export const wedding = store("wedding", defaultValue)
wedding.subscribe((value) => localStorage.wedding = JSON.stringify((value)))

let defaultMax = ""
export const max = store("max", defaultMax)
max.subscribe((value) => localStorage.max = JSON.stringify((value)))

let defaultTables = []
export const tables = store("tables", defaultTables)
tables.subscribe((value) => localStorage.tables = JSON.stringify((value)))
