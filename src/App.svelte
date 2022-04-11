<script>
  import ResultCard from "./components/ResultCard.svelte";
  import Close from "./components/icons/Close.svelte";
  import About from "./components/About.svelte";
  import { fly } from "svelte/transition";

  export let colors;

  let inputColor = "";
  let result = [];
  let isResultVisible = true;
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

    isResultVisible = false;
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
<main class="min-h-screen w-full divide-y-2 divide-gray-700 overflow-hidden">
  <header
    class="container mx-auto flex w-full items-center justify-between py-2 px-3">
    <div class="text-2xl font-bold">
      <p>Tailwind Color Similarity</p>
      <div class="bg h-1 w-24 rounded-full bg-violet-600" />
    </div>
    <About />
  </header>

  <div class="relative">
    {#if isResultVisible}
      <!-- input container -->
      <div
        in:fly={{ x: 100, duration: 500 }}
        out:fly={{ x: 100, duration: 500 }}
        class="absolute left-1/2 mt-14 h-[23rem] w-[40rem] -translate-x-1/2 rounded-lg border border-gray-700 bg-gray-800 shadow-lg">
        <div class="h-full p-8">
          <header class="flex h-3/4 flex-col justify-center">
            <div
              class="flex items-center rounded border-2 border-stone-400 px-3 py-4 transition focus-within:border-violet-600">
              <input
                type="text"
                placeholder="Example: #FF5566"
                maxlength="7"
                bind:value={inputColor}
                class="w-full bg-transparent text-3xl caret-violet-300 placeholder:italic placeholder:text-gray-500 focus:outline-none" />

              <button on:click={() => (inputColor = "")}
                ><Close
                  className="w-9 h-9 {inputColor == ''
                    ? 'hidden'
                    : 'block'}" /></button>
            </div>
          </header>

          <div class=" h-1/4">
            <button
              class=" w-full rounded-full bg-violet-600 p-4 transition hover:bg-violet-500 disabled:bg-violet-600/40 disabled:text-gray-200/40"
              disabled={!isValidate}
              on:click={calcColors}>
              <p class="text-3xl font-bold">Search Color</p>
            </button>
          </div>
        </div>
      </div>
    {:else}
      <!-- output container -->
      <div
        in:fly={{ x: 100, duration: 500 }}
        out:fly={{ x: 100, duration: 500 }}
        class="absolute left-1/2 -translate-x-1/2  mt-14 h-[23rem] w-[40rem] rounded-lg border border-gray-700 bg-gray-800 shadow-lg">
        <div class="h-full p-4">
          <!-- header -->
          <header class="flex w-full justify-between items-center ">
            <div class="text-2xl font-bold">Result</div>
            <button on:click={() => (isResultVisible = true)}>
              <Close className="w-9 h-9" />
            </button>
          </header>

          <div class="space-y-10 mt-8">
            {#each result as color, index}
              <ResultCard {index} {color} />
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</main>
