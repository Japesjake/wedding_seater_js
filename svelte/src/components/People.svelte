<script>
    import App from '../App.svelte';
	import { people } from '../stores';
	export let party;
	
    function addInput (id, party) {
	let defaultPerson = {id: Math.random(), firstName: '', lastName: '', hasSO: false, table: null, locked: false, SO: {firstName: '', lastName: ''}, locked: false, party: party}
    $people.splice(id + 1, 0, defaultPerson);
    $people = $people;
	}
	function removeInput (id) {
		if (!isOneLeft(party)) {
			$people.splice(id,1)
			$people = $people;
		}
	}
	function toggleSO (person){
		person.hasSO = !person.hasSO;
		$people = $people;
	}
	// checks if there is one guest in party.
	function isOneLeft (party) {
		let numPeople = 0;
		for ( let person of $people) {
			if (party == person.party) {
				numPeople++
			}
		}
		if (numPeople <= 1) {
			return true
		}
		return false
	}
</script>

<h1><u>Guests of {party}</u></h1><br>
{#each $people as person, id (person.id)}
{#if person.party == party}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id, party)}>+</button>
<input tabindex = 0 type="text" placeholder="firstname" bind:value={person.firstName}>
<input tabindex = 0 type="text" placeholder="lastname" bind:value={person.lastName}>
has SO?
<input tabindex = -1 type="checkbox" on:click="{toggleSO(person)}" checked={person.hasSO}><br>
{#if person.hasSO}
Who?
<input type="text" placeholder="firstname" bind:value={person.SO.firstName}>
<input type="text" placeholder="lastname" bind:value={person.SO.lastName}><br>
{/if}
{/if}
{/each}
<button on:click={addInput($people.length, party)}>+</button>
<style>
	input[type = "text"]{
	text-align: left;
	width: 6em;
	}

input[type="checkbox"] {
	width: 1em;
}

</style>