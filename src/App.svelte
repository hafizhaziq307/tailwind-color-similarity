<script>
  import ResultCard from "./components/ResultCard.svelte";
  import Close from "./components/icons/Close.svelte";
  import { fade } from "svelte/transition";

  export let colors;

  let inputColor = "";
  let result = [];
  let isResultHidden = true;
  let isValidate = false;

  $: isValidate = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g.test(
    inputColor
  );

  const calcColors = () => {
    result = [];

    colors.forEach((color) => {
      let objColor = {};
      objColor.title = color.title;
      objColor.percentage = compareColors(inputColor, color.hexcode).toFixed(2);

      if (objColor.percentage > 50) result.push(objColor);
    });

    result.sort((a, b) => b.percentage - a.percentage);
    result = result.slice(0, 3);

    isResultHidden = false;
  };

  const convertToRGB = (rawHex) => {
    let validHex = rawHex.toUpperCase().slice(1);
    let rgbHex = validHex.match(/.{1,2}/g);

    return rgbHex.map((item) => parseInt(item, 16));
  };

  const compareColors = (hex1, hex2) => {
    const rgb1 = convertToRGB(hex1);
    const rgb2 = convertToRGB(hex2);

    let red =
      rgb1[0] >= rgb2[0]
        ? (rgb2[0] / rgb1[0]) * 100
        : (rgb1[0] / rgb2[0]) * 100;
    let green =
      rgb1[1] >= rgb2[1]
        ? (rgb2[1] / rgb1[1]) * 100
        : (rgb1[1] / rgb2[1]) * 100;
    let black =
      rgb1[2] >= rgb2[2]
        ? (rgb2[2] / rgb1[2]) * 100
        : (rgb1[2] / rgb2[2]) * 100;

    return (red + green + black) / 3;
  };
</script>

<!-- background -->
<main class="relative grid min-h-screen w-full place-content-center">
  <!-- front card -->
  <div
    class="relative h-[20rem] w-[35rem] overflow-hidden rounded bg-stone-700">
    {#if isResultHidden}
      <!-- input container -->
      <div transition:fade class="absolute inset-0">
        <header class="flex h-3/4 flex-col justify-center p-4">
          <input
            type="text"
            placeholder="Example: #FF5566"
            maxlength="7"
            bind:value={inputColor}
            class="w-full rounded border-2 border-stone-400 bg-transparent px-2 py-4 text-3xl transition focus:border-red-500 focus:outline-none" />
        </header>

        <button
          class="flex h-1/4 w-full items-center justify-center space-x-2 bg-red-600 transition hover:bg-red-500 disabled:bg-gray-600"
          disabled={!isValidate}
          on:click={calcColors}>
          <p class="text-3xl font-bold">Search Color</p>
        </button>
      </div>
    {:else}
      <!-- output container -->
      <div transition:fade class="absolute inset-0 p-4">
        <!-- header -->
        <header class="flex w-full justify-between items-center ">
          <div class="text-xl font-bold">Similarity Result</div>
          <button on:click={() => (isResultHidden = true)}>
            <Close />
          </button>
        </header>

        <div class="space-y-6 mt-10">
          {#each result as color, index}
            <ResultCard {index} {color} />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</main>
