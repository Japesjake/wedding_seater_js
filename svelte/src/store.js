import { writable } from 'svelte/store'

function store (key, defaultValue) {
    if (!localStorage.getItem(key)) {
        let value = defaultValue
    }else{
        let value = JSON.parse(localStorage.getItem(key))
    }
    const write = writable(value)
    return write
}

defaultValue = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}},
                {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}}];
export const people = store("people", defaultValue)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))
// let defaultArray = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}},
//                     {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}}];
// let defaultPeople = returnStored('people', defaultArray)
// export const people = writable(defaultPeople)
// 

// let defaultValue = ""
// let defaultNum = returnStored('max', defaultValue)
// export const max = writable(defaultNum)
// max.subscribe((value) => localStorage.max = JSON.stringify((value)))