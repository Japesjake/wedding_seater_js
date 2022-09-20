
import {persistStore} from './persistStore'

const people = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: true, SO: ""},
                       {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: ""}
                      ];

export const store = persistStore('people', people)