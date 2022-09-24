import { writable } from 'svelte/store'
let defaultPeople = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: ""},
                     {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: ""}
                        ];
// if (!localStorage.getItem('people')){
//     defaultPeople = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: ""},
//                         {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: ""}
//                         ];
//                 } else {
//                     defaultPeople = localStorage.getItem('people')
//                 }
export const people = writable(defaultPeople)
people.subscribe((value) => localStorage.people = JSON.stringify((value)))
// people.set("thing")
// console.log(people)