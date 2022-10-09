<script>
	import { people, max, min} from './store.js'
	import { makeTables, update } from './update.js'

	$: $people, update($people);
	$: makeTables($max, $min);

	function addInput () {
		$people.push({id: Math.random(), firstName: null, lastName: null, hasSO: false, SO: {firstName: null, lastName: null}});
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

<main>
	<h1>Wedding Seater</h1>
	<section class="indent-1">
	<section>
		<input type="number" placeholder="max" bind:value={$max}>
		<input type="number" placeholder="min" bind:value={$min}>
		per table<br>
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
	</section>
	<section>

	</section>
	</section>
	
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
		
	section {
		float: left;
		padding-right: 5em;
	}

	input[type = "text"]{
		text-align: left;
		width: 6em;
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