import { people, max, min, tables } from '../stores.js'
import { get } from 'svelte/store'

function sum (array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function getTotalGuests() {
    let total = 0;
    for (let i = 0; i < get(people).length; i++) {
        if (get(people)[i].hasSO) {
            total += 2
        }else{
            total += 1
        }
    }
    return total
}

export function makeTables () {
    let totalGuests = getTotalGuests()
    if (get(max) <= 0) {return}
    let numTables = Math.ceil(totalGuests / get(max))
    let nums = []
    for (let i = 0; i < numTables; i++) {
        nums.push(get(max))
    }
    let totalSubtractor = 0;
    let subtractor = 0;
    while (sum(nums) != totalGuests) {
        subtractor = totalSubtractor;
        for (let i = 0; i < numTables; i++) {
            if (subtractor) {
                nums[i] -= 1
                subtractor -= 1
            }
            if (sum(nums) == totalGuests) {
                break
            }else{
                totalSubtractor++
            }
        }  
    }
    tables.set(nums)
}