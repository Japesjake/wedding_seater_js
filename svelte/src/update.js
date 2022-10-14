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
    let nums = [];
    let iteration = 1;
    while (sum(nums) != get(people).length) {
    // while (false) {
        console.log("iteration", iteration)
        console.log("total seats", sum(nums))
        console.log("total people", get(people).length)
        console.log("nums", nums)
        nums = [];
        let subtractor = totalSubtractor;
        let num = get(max);
        while (subtractor) {
            console.log(subtractor)
            for (i = 0; i < nums.length; i++) {
                num - 1;
                subtractor--;
                console.log("num", num)
                if (subtractor >= nums.length) {
                    continue
                }
            }
        }
    }
            nums.push(num)
}
            totalSubtractor++
            iteration++
            if (iteration >= 20) break
        }
        console.log(sum(nums) == get(people).length)
        console.log(nums)
    }

export function update (){
    makeTables()
}