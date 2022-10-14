<script>
    import { set_attributes } from 'svelte/internal';
import { people, tables } from '../stores.js'
</script>

{#each $tables as table, id}
    Table {id + 1} has {table} seats.<br>
{/each}