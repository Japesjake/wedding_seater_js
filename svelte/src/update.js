import { people, max, min, tables } from './stores.js'
import { get } from 'svelte/store'

function sum (array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

export function makeTables () {
    let numTables = Math.ceil(get(people).length / get(max))
    let totalSubtractor = 0;
    const nums = []
    // while (sum(nums) != get(people).length) {
    while (false) {
        console.log(sum(nums))
        console.log(get(people).length)
        let subtractor = totalSubtractor;
        for (let i = 0; i < numTables; i++) {
            let num = max;
            if (subtractor) {
                num - 1;
                subtractor--;
            }
            nums.push(num)
            }
            totalSubtractor++
        }
        console.log(nums)
    }

export function update (max, min, tables){
    makeTables(max, min, tables)
}