<script>
  import ClickOutside from "svelte-click-outside";
  import { fly } from "svelte/transition";

  let trigger;
  let isShow = false;
</script>

<div class="relative">
  <button bind:this={trigger} on:click={() => (isShow = !isShow)}>
    <svg
      class="h-8 w-8"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd" /></svg>
  </button>

  {#if isShow}
    <ClickOutside on:clickoutside={() => (isShow = false)} exclude={[trigger]}>
      <div
        in:fly={{ y: 50, duration: 300 }}
        out:fly={{ y: 50, duration: 300 }}
        class="absolute right-0 z-20 mt-1 w-52 space-y-2 rounded-lg border border-gray-700 bg-gray-800 p-4 text-gray-300 shadow-lg">
        <div class="text-center font-bold">Tailwind Color Similarity</div>
        <div class="bg mx-auto h-1 w-12 rounded-full bg-violet-600" />
        <div class="text-bold text-center text-gray-300">ver 0.1.1</div>
        <div class="text-center text-sm">&copy; 2022 Hafiz Haziq</div>
      </div>
    </ClickOutside>
  {/if}
</div>
