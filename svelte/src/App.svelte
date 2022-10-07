<script>
	import { people } from './store.js'
	import { runSeater } from './run.js' 

	function addInput () {
		console.log("add func")
		$people.push({id: Math.random(), firstName: null, lastName: null, hasSO: false, SO: {firstName: null, lastName: null}});
		$people = $people;
	}
	function removeInput (id) {
		console.log("Remove Func")
		if ($people.length > 1) {
			$people.splice(id,1)
			$people = $people;
		}
	}
	function toggleSO (person){
		console.log("toggle Func")
		person.hasSO = !person.hasSO
		$people = $people;
	}
</script>

<main>
	<h1>Wedding Seater</h1>
		<input type="number" placeholder="max">
		<input type="number" placeholder="min">

		per table
		<br>
		{#each $people as $person, id ($person.id)}
			<button on:click={removeInput(id)}>-</button>
			<input type="text" placeholder="firstname" bind:value={$person.firstName}>
			<input type="text" placeholder="lastname" bind:value={$person.lastName}>
			has SO?
			<input type="checkbox" on:click="{toggleSO($person)}" checked={$person.hasSO}><br>
		{#if $person.hasSO}
			Who?
			<input type="text" placeholder="firstname" bind:value={$person.SO.firstName}>
			<input type="text" placeholder="lastname" bind:value={$person.SO.lastName}><br>
		{/if}
		{#if id === $people.length - 1}
			<button on:click={addInput}>+</button>
		{/if}
		{/each}
</main>

<style>
	main {
		padding: 2em;
		max-width: 240px;
		margin: 0, auto;
	}

	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	input[type = "text"]{
		text-align: left;
		width: 8em;
	}

	input[type="checkbox"] {
		width: 1em;
	}

	input[type="number"] {
		width: 4em
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>