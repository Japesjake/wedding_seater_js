<script>
import { wedding, max, tables } from '../stores.js'

function sum (array) {
    let total = 0
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

//returns total guests, couples and singles as an array in that order.
function getTotals() {
    let total = 0;
    let couples = 0;
    let singles = 0;
    for (let i = 0; i < $people.length; i++) {
        if ($people[i].hasSO) {
            total += 2
            couples += 1
        }else{
            total += 1
            singles += 1
        }
    }
    return [total, couples, singles]
}

function makeTables () {
    let totals = getTotals()
    let totalGuests = totals[0]
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
    $tables = []
    for (let i = 0; i < nums.length; i++) {
        $tables.push({number: i + 1, seats: nums[i], people: 0})
    }
}
function unassign() {
    for (let person of $people) {
        person.assigned = false;
        person.table = false;
    }
}
function assign() {
    for (let table of $tables) {
        for (let person of $people) {
            if (!person.assigned) {
                if (person.hasSO && table.seats >= table.people + 2) {
                table.people += 2;
                person.table = table.number;
                person.assigned = true;
            } else if (!person.hasSO && table.seats > table.people) {
                table.people += 1;
                person.table = table.number;
                person.assigned = true;
            }
            }

        }
    }
    $people = $people
}
function autoAssign () {
    unassign()
    makeTables()
    assign()
}

$: $max, $people, autoAssign()
</script>

<main>
    {#each $tables as table, id}
    Table {table.number} has {table.seats} seats.<br>
    <div class = 'bordered'>
        {#each $people as person}
        {#if person.table == id + 1}
        - {person.firstName} {person.lastName}<br>
        {#if person.hasSO}
        {person.SO.firstName} {person.SO.lastName}<br>
        {/if}
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