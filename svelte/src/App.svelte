<script>
	let people = [{name: "JP", isGrouped:false}];
</script>

<main>
	<h1 style>Wedding Seater</h1>
	<form>
		{#each people as person}
			<input type="text" placeholder="firstname">
			<input type="text" placeholder="lastname">
		{/each}
	</form>
</main>

<style>
	main {
		padding: 2em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
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