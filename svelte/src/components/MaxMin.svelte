<script>

    import { max, min } from "../stores";

</script>
max:
<input type="number" placeholder="max" bind:value={$max}>
min:
<input type="number" placeholder="min" bind:value={$min}>
per table<br>

<style>
    input[type="number"] {
	width: 4em
}
</style>