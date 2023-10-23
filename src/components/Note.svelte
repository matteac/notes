<script lang="ts">
  import NoteControls from "./NoteControls.svelte";
  export let id: string;
  export let title: string;
  export let content: string;
</script>

<article class="flex flex-col card p-5 space-y-3 w-full">
  <div class="flex justify-between">
    <h2 class="text-2xl font-bold">{title}</h2>
  </div>
  <p class="break-words">{content}</p>
  <NoteControls {id} {title} {content} />
</article>

<style>
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
