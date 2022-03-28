<script>
  import ResultCard from "./components/ResultCard.svelte";
  import Close from "./components/icons/Close.svelte";
  import { fade } from "svelte/transition";

  export let colors;

  let inputColor = "";
  let result = [];
  let resultVisible = false;

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
<main class="grid place-content-center w-full min-h-screen relative">
  <!-- front card -->

  <div
    transition:fade
    class="w-[35rem] h-[20rem] bg-stone-700 rounded relative">
    {#if !resultVisible}
      <div transition:fade class="absolute inset-0">
        <header class="p-4 h-3/4 flex flex-col justify-center">
          <input
            type="text"
            placeholder="Example: #FF5566"
            bind:value={inputColor}
            class="rounded px-2 py-4 text-3xl bg-transparent border-2 border-stone-300 w-full focus:outline-none focus:border-red-500 transition" />
        </header>

        <button
          class="w-full h-1/4 bg-red-600 hover:bg-red-500 flex justify-center items-center space-x-2 transition"
          on:click={calcColors}>
          <p class="font-bold text-3xl">Search Color</p>
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
