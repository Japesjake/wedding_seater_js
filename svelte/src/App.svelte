<script>
	let people = [{id: Math.random(), firstName: "Sarah", lastName: "Showalter", isTaken: true},
				  {id: Math.random(), firstName: "James", lastName: "Showalter", isTaken: true}
				  ];
	people = people;
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
</script>

<main>
	<h1>Wedding Seater</h1>
		{#each people as person, id (person.id)}
			<button on:click={removeInput(id)}>-</button>
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname"><br>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>