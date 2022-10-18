<script>
    import { loop_guard } from 'svelte/internal';
import { people, max, min, tables } from '../stores.js'

function sum (array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function getTotalGuests() {
    let total = 0;
    for (let i = 0; i < $people.length; i++) {
        if ($people[i].hasSO) {
            total += 2
        }else{
            total += 1
        }
    }
    return total
}

function makeTables () {
    let totalGuests = getTotalGuests()
    if ($max <= 0) {return}
    let numTables = Math.ceil(totalGuests / $max)
    let nums = []
    for (let i = 0; i < numTables; i++) {
        nums.push($max)
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

function assign() {
    for (let i = 0; i < $people.length; i++) {
        $people[i].table = 1;
    }
}

assign()

function autoAssign () {
    makeTables()
}

$: $max, $min, $people, autoAssign()
</script>

<main>
    {#each $tables as table, id}
    Table {id + 1} has {table} seats.<br>
    <div class = 'bordered'>
        {#each $people as person}
        {#if person.table == id + 1}
        {person.firstName} {person.lastName}<br>
        {/if}
        {/each}
    </div>
    {/each}
</main>

<style>
    main {
        font-size: 20px;
    }
    .bordered {
		border-width: 3px;
        border-style: solid;
        border-color: black;
        padding-left: 5px;
	}
</style>