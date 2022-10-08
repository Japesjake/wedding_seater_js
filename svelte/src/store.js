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

let defaultValue = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}},
                {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}}];
export const people = store("people", defaultValue)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))

let defaultMax = ""
export const max = store("max", defaultMax)
max.subscribe((value) => localStorage.max = JSON.stringify((value)))

let defaultMin = ""
export const min = store("max", defaultMin)
min.subscribe((value) => localStorage.min = JSON.stringify((value)))