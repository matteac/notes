<script lang="ts">
  export let id: string;
  export let title: string;
  export let content: string;
</script>

<form class="flex flex-col space-y-2 card px-2 py-0 text-white h-60 justify-around" action="?/edit" method="POST">
  <input type="hidden" name="id" value={id} />
  <input type="text" name="title" placeholder="Title" value={title} class="input input-bordered w-full h-8 "/>
  <textarea name="content" placeholder="Content" value={content} class="textarea textarea-bordered w-full h-2/4" />
  <div class="w-full space-x-2 flex "> 
    <button class="btn w-1/2 variant-ghost-secondary">Save</button>
    <button class="btn w-1/2 variant-ghost-error" on:click={(e) => {
      e.preventDefault()
      const dialog = document.getElementById(`dialog-${id}`);
      // @ts-ignore
      dialog.close();
    }}>Cancel</button>
  </div>
</form>
