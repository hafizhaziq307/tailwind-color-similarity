<script>
  export let index;
  export let color;
</script>

<article
  class="flex h-full w-full divide-x-2 divide-gray-700 rounded-sm border border-gray-700 bg-gray-800 shadow-sm shadow-violet-500">
  <div
    class="flex w-1/12 items-center justify-center p-2 pr-2 text-center text-2xl">
    {index + 1}
  </div>
  <div class="w-11/12 p-2 pl-2">
    <header class="flex items-center justify-between">
      <div class="text-xl font-medium">{color.title}</div>
      <div class="text font-medium">{color.percentage}%</div>
    </header>

    <div
      class="h-3 w-full overflow-hidden rounded-full border border-gray-400 bg-gray-300">
      <div
        class="progress h-full bg-violet-600"
        style="width: {color.percentage}%" />
    </div>
  </div>
</article>
