<script>
    import App from '../App.svelte';
	import { wedding } from '../stores';
	import Person from '../Person'

	
    function addInput (id) {
		let defaultPerson = new Person('', '')
		$wedding.people.splice(id + 1, 0, defaultPerson);
		$wedding = $wedding;
	}
	function removeInput (id) {
		$wedding.people.splice(id,1);
		$wedding = $wedding;
	}
	function toggleSO (person){
		person.hasSO = !person.hasSO;
		$wedding = $wedding;
	}
</script>

{#each $wedding.people as person, id (person.id)}
<button tabindex = -1 on:click={removeInput(id)}>-</button>
<button tabindex = -1 on:click={addInput(id)}>+</button>
<input tabindex = 0 type="text" placeholder="firstname" bind:value={person.firstName}>
<input tabindex = 0 type="text" placeholder="lastname" bind:value={person.lastName}>
has SO?
<input tabindex = -1 type="checkbox" on:click="{toggleSO(person)}" checked={person.hasSO}><br>
{#if person.hasSO}
Who?
<input type="text" placeholder="firstname" bind:value={person.SO.firstName}>
<input type="text" placeholder="lastname" bind:value={person.SO.lastName}><br>
{/if}
{/each}
<button on:click={addInput($wedding.people.length)}>+</button>
<style>
	input[type = "text"]{
	text-align: left;
	width: 6em;
	}

input[type="checkbox"] {
	width: 1em;
}

</style>