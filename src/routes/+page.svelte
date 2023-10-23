<script lang="ts">
  import Note from "$components/Note.svelte";
  import AddForm from "$components/AddForm.svelte";
  export let data: any;
</script>

<svelte:head>
  <title>Notes</title>
</svelte:head>

<main class="flex flex-col w-full items-center space-y-5 my-8">
  {#if data}
    <h1 class="text-5xl font-bold">Notes</h1>
    <AddForm action="?/add" />
    <div class="flex flex-col space-y-5 w-2/3">
      {#each data.notes as { id, title, content }}
        <Note {id} {title} {content} />
      {/each}
    </div>
  {/if}
</main>
