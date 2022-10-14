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
    let iteration = 0;
    let numTables = Math.ceil(get(people).length / get(max))
    let nums = []
    for (let i = 0; i < numTables; i++) {
        nums.push(get(max))
    }
    let totalSubtractor = 0;
    let subtractor = 0;
    while (sum(nums) != get(people).length) {
    // while (false) {
    subtractor = totalSubtractor;
    for (let i = 0; i < numTables; i++) {
        if (subtractor) {
            nums[i] -= 1
            subtractor -= 1
        }
        if (sum(nums) == get(people).length) {
            break
        }else{
            totalSubtractor++
        }
    }
            iteration++
            if (iteration >= 20) break
    }
    console.log(nums)
}

export function update (){
    makeTables()
}