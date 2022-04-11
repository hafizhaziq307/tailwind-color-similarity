<script>
  export let index;
  export let color;
</script>

<article
  class="flex h-full w-full divide-x-2 divide-gray-600 rounded-sm bg-stone-800">
  <div
    class="flex  w-1/12 items-center justify-center p-2 pr-2 text-center text-2xl">
    {index + 1}
  </div>
  <div class="w-11/12 p-2 pl-2">
    <header class="flex items-center  justify-between">
      <div class="text-lg font-medium">{color.title}</div>
      <div class="text-sm font-medium">{color.percentage}%</div>
    </header>

    <div class="h-1 w-full bg-gray-300">
      <div
        class="progress h-full bg-red-600"
        style="width: {color.percentage}%" />
    </div>
  </div>
</article>
