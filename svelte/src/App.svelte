<script>
	// import { min, max, people, tables } from './stores.js'
	import People from './components/People.svelte'
	import Max from './components/Max.svelte'
	import Tables from './components/Tables.svelte'

</script>

<main>
	<h1>Wedding Seater</h1>
	<section class="indent-1">
	<section>
		<Max />
		<People />
	</section>
	<section>
		<Tables />
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>