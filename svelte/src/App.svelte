<script>
	import { people, max, min} from './stores.js'
	// import { makeTables, update } from './update.js'
	import Person from './Person.svelte'
	// $: $people, update($people);
	// $: makeTables($max, $min);

</script>

<main>
	<h1>Wedding Seater</h1>
	<section class="indent-1">
	<section>
		<input type="number" placeholder="max" bind:value={$max}>
		<input type="number" placeholder="min" bind:value={$min}>
		per table<br>
			<Person />

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