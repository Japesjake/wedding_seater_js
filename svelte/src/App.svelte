<script>
    // import { loop_guard } from "svelte/internal";


	let people = [{id: Math.random(), firstName: "Lucas", lastName: "Redlawski", hasSO: false, SO: ""},
				  {id: Math.random(), firstName: "James", lastName: "Showalter", hasSO: false, SO: ""}
				  ];
	function addInput () {
		people.push({id: Math.random()});
		people = people;
	}
	function removeInput (id) {
		if (people.length > 1) {
			people.splice(id,1)
			people = people;
		}
	}
	function toggleSO (person){
		person.hasSO = !person.hasSO
		people = people;
	}
</script>

<main>
	<h1>Wedding Seater</h1>
		{#each people as person, id (person.id)}
			<button on:click={removeInput(id)}>-</button>
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname">
			has SO?
			<input type="checkbox" on:click="{toggleSO(person)}"><br>
		{#if person.hasSO}
			Who?
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname"><br>
		{/if}
		{#if id === people.length - 1}
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

	input {
		text-align: left;
		width: 8em;
	}

	input[type="checkbox"] {
		width: 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>