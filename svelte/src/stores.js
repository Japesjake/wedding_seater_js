import { writable } from 'svelte/store'

function store (key, defaultValue) {
    if (!localStorage.getItem(key)) {
        var value = defaultValue
    }else{
        var value = JSON.parse(localStorage.getItem(key))
    }
    const write = writable(value)
    return write
}

let defaultValue = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}, table: ''},
                    {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}, table: ''}];
export const people = store("people", defaultValue)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))

let defaultMax = ""
export const max = store("max", defaultMax)
max.subscribe((value) => localStorage.max = JSON.stringify((value)))

let defaultMin = ""
export const min = store("min", defaultMin)
min.subscribe((value) => localStorage.min = JSON.stringify((value)))

let defaultTables = ""
export const tables = store("tables", defaultTables)
tables.subscribe((value) => localStorage.defaultTables = JSON.stringify((value)))
