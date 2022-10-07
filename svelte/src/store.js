import { writable } from 'svelte/store'

function returnStored (key, defaultValue) {
    if (!localStorage.getItem(key)) {
        return defaultValue
    }else{
        return JSON.parse(localStorage.getItem(key))
    }
}

let defaultArray = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}},
                    {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}}];
let defaultPeople = returnStored('people', defaultArray)
export const people = writable(defaultPeople)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))

let defaultValue = ""
let defaultNum = returnStored('max', defaultValue)
export const max = writable(defaultNum)
max.subscribe((value) => localStorage.max = JSON.stringify((value)))