import { writable } from 'svelte/store'

if (!localStorage.getItem('people')){
    var defaultPeople = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: {}},
                        {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: {}}
                        ];
} else {
    var defaultPeople = JSON.parse(localStorage.getItem('people'))
    }

export const people = writable(defaultPeople)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))