import { people, max, min, tables } from '../stores.js'
import { get } from 'svelte/store'

export function assignCouples () {
}
    //     for (let i = 0; i < get(tables).length; i++) {
//         for (let j = 0; j < get(tables)[i]; j++) {
//             let count = 0
//             for (let k = 0; k < get(people).length; k++) {
//                 if (get(people).hasSO || true) {
//                     console.log("hasSO")
//                     let total = get(tables)[i]
//                 }
//             }
//         }
//     }
// }

export function seeTables () {
    for (let i = 0; i < get(people).length; i++){
        if (get(people)[i].hasSO) {
            console.log(get(people)[i].table)
        }
    }
}