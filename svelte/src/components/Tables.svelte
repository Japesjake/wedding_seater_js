<script>
    import { set_attributes } from 'svelte/internal';
import { people, tables } from '../stores.js'
</script>
<main>
    {#each $tables as table, id}
    Table {id + 1} has {table} seats.<br>
    {#each $people as person}
    {#if person.table == id + 1}
    {person.firstName} {person.lastName}<br>
    {/if}
    {/each}
    {/each}
</main>

<style>
    main {
        font-size: 20px;
    }
</style>