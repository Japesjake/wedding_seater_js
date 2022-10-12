<script>

    import { max, min } from "../stores";

</script>

<input type="number" placeholder="max" bind:value={$max}>
<input type="number" placeholder="min" bind:value={$min}>
per table<br>

<style>
    input[type="number"] {
	width: 4em
}
</style>