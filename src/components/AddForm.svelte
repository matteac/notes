<script lang="ts">
  let form_open = false;
</script>

<button 
  class="btn variant-soft-secondary rounded-full"
  on:click={(e) => {
  e.preventDefault()
  form_open = !form_open
  }}>{form_open ? "Collapse": "Add Note"  }</button>
<form style={form_open ? "" : "display: none;"} class="flex flex-col xl:w-2/5 w-2/3 space-y-2 card p-2" action="?/add" method="POST">
  <input type="text" name="title" placeholder="Title" class="input input-bordered w-full h-8 "/>
  <textarea name="content" placeholder="Content" class="textarea textarea-bordered w-full" />
  <button class="btn variant-ghost-secondary">Save</button>
</form>
