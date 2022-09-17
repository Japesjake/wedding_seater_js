<script>
	let people = [{firstName: "Sarah", lastName: "Showalter", isTaken: true},
				  {firstName: "James", lastName: "Showalter", isTaken: true},
				  ];
	function addInput () {
		console.log("addInput runs.");
		people.push({});
	}
</script>

<main>
	<h1>Wedding Seater</h1>
	<!-- <form> -->
		{#each people as person, i}
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname">
			{#if i < people.length - 1}
				<br>
			{:else}
				<button onclick="addInput()">+</button><br>
			{/if}
		{/each}
	<!-- </form> -->
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