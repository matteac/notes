<script lang="ts">
  import EditForm from "./EditForm.svelte";
  export let id: string;
  export let title: string;
  export let content: string;
</script>
<div class="flex flex-row w-full">
  <dialog class="w-1/2 bg-transparent items-center" id="dialog-{id}">
    <EditForm {id} {title} {content} />
  </dialog>
  <button on:click={() => {
    const dialog = document.getElementById(`dialog-${id}`);
    // @ts-ignore
    dialog.showModal();
  }} class="btn variant-ghost-primary w-1/2 mr-2">Edit</button>
  <form class="flex w-1/2" action="?/delete" method="POST">
    <input type="hidden" name="id" value={id} />
    <button class="btn w-full variant-ghost-error">Delete</button>
  </form>
</div>

<style>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
