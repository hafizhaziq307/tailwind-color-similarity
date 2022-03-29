<script>
  import ResultCard from "./components/ResultCard.svelte";
  import Close from "./components/icons/Close.svelte";
  import { fade } from "svelte/transition";

  export let colors;

  let inputColor = "";
  $: isClickable = inputColor.length == 7 && inputColor.includes("#", 0);

  let result = [];
  let resultVisible = false;
  let isClickable = false;

  function calcColors() {
    reset();

    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];
      let objColor = {};
      objColor.title = color.title;
      objColor.percentage = compareColors(inputColor, color.hexcode).toFixed(2);

      if (objColor.percentage > 50) {
        result.push(objColor);
      }
    }

    result.sort((a, b) => b.percentage - a.percentage);
    result = result.slice(0, 3);

    resultVisible = true;
  }

  function validateColor(hexcode) {
    let color = hexcode.toUpperCase().split("");
    color.splice(0, 1);

    for (let i = 0; i < color.length; i++) {
      switch (color[i]) {
        case "A":
          color[i] = 10;
          break;
        case "B":
          color[i] = 11;
          break;
        case "C":
          color[i] = 12;
          break;
        case "D":
          color[i] = 13;
          break;
        case "E":
          color[i] = 14;
          break;
        case "F":
          color[i] = 15;
          break;
      }
    }

    // convert all values to int
    return color.map(function (e) {
      return parseInt(e);
    });
  }

  function convertToRGB(hexcode) {
    const arr_color = validateColor(hexcode);
    let arr = [];

    const red = arr_color[0] * 16 + arr_color[1];
    const green = arr_color[2] * 16 + arr_color[3];
    const black = arr_color[4] * 16 + arr_color[5];

    arr.push(red);
    arr.push(green);
    arr.push(black);

    return arr;
  }

  function compareColors(hexcode1, hexcode2) {
    const rgb1 = convertToRGB(hexcode1);
    const rgb2 = convertToRGB(hexcode2);

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

    return ((red + green + black) / 300) * 100;
  }

  function reset() {
    result = [];
  }
</script>

<!-- background -->
<main class="relative grid min-h-screen w-full place-content-center">
  <!-- front card -->

  <div
    class="relative h-[20rem] w-[35rem] overflow-hidden rounded bg-stone-700">
    {#if !resultVisible}
      <div transition:fade class="absolute inset-0">
        <header class="flex h-3/4 flex-col justify-center p-4">
          <input
            type="text"
            placeholder="Example: #FF5566"
            bind:value={inputColor}
            class="w-full rounded border-2 border-stone-300 bg-transparent px-2 py-4 text-3xl transition focus:border-red-500 focus:outline-none" />
        </header>

        <button
          class="flex h-1/4 w-full items-center justify-center space-x-2 bg-red-600 transition hover:bg-red-500 disabled:bg-gray-600"
          disabled={!isClickable}
          on:click={calcColors}>
          <p class="text-3xl font-bold">Search Color</p>
        </button>
      </div>
    {:else}
      <div transition:fade class="absolute inset-0 p-4">
        <!-- header -->
        <header class="flex w-full justify-between items-center ">
          <div class="text-xl font-bold">Similarity Result</div>
          <button on:click={() => (resultVisible = false)}>
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
