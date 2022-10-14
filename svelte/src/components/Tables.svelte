<script>
import { tables } from '../stores.js'
</script>

{#each tables as table, id}
    Table {id + 1} has {table} seats.<br>
{/each}