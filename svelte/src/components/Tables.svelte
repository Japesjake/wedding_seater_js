<script>
import { people, tables } from '../stores.js'
</script>

{#each $tables as table, id (table.id)}
{/each}