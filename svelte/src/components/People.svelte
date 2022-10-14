<script>
    import { people } from '../stores'
    function addInput () {
    $people.push({id: Math.random(), firstName: null, lastName: null, hasSO: false, table: null, SO: {firstName: null, lastName: null}});
    $people = $people;
	}
	function removeInput (id) {
		if ($people.length > 1) {
			$people.splice(id,1)
			$people = $people;
		}
	}
	function toggleSO (person){
		person.hasSO = !person.hasSO;
		$people = $people;
	}
</script>

{#each $people as person, id (person.id)}
<button on:click={removeInput(id)}>-</button>
<input type="text" placeholder="firstname" bind:value={person.firstName}>
<input type="text" placeholder="lastname" bind:value={person.lastName}>
has SO?
<input type="checkbox" on:click="{toggleSO(person)}" checked={person.hasSO}><br>
{#if person.hasSO}
Who?
<input type="text" placeholder="firstname" bind:value={person.SO.firstName}>
<input type="text" placeholder="lastname" bind:value={person.SO.lastName}><br>
{/if}
{#if id === $people.length - 1}
<button on:click={addInput}>+</button>
{/if}
{/each}

<style>
	input[type = "text"]{
	text-align: left;
	width: 6em;
	}

input[type="checkbox"] {
	width: 1em;
}

</style>