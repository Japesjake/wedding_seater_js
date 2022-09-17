<script>
	let people = [{id: Math.random(), firstName: "Sarah", lastName: "Showalter", isTaken: true},
				  {id: Math.random(), firstName: "James", lastName: "Showalter", isTaken: true},
				  ];
	function addInput () {
		console.log("addInput runs")
		people.push({id: Math.random()});
		people = people;
		console.log(people)
	}
	function removeInput (id) {
		console.log("removeInput runs")
		if (people.length > 1) {
			people.splice(id,1)
			people = people;
			console.log(people)
		}
	}
</script>

<main>
	<h1>Wedding Seater</h1>
		{#each people as person, id (person.id)}
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname">
			{#if id < people.length - 1}
				<button on:click={removeInput(id)}>-</button><br>
			{:else}
				<button on:click={addInput}>+</button><br>
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