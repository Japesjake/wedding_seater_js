<script>
</script>

<button on:click={removeInput(id)}>-</button>
<input type="text" placeholder="firstname">
<input type="text" placeholder="lastname">
has SO?
<input type="checkbox" on:click="{toggleSO(person)}"><br>