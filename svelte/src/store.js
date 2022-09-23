import { writable } from 'svelte/store'
const defaultPeople = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: ""},
                    {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: ""}
                    ];
export const peopleImport = writable(JSON.stringify(defaultPeople))
peopleImport.subscribe((value) => localStorage.defaultPeople = JSON.parse(value))
