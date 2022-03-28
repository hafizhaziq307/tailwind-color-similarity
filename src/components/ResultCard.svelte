<script>
  export let index;
  export let color;
</script>

<article
  class="w-full h-full rounded-sm bg-stone-800 flex divide-x-2 divide-gray-600">
  <div
    class="text-2xl  w-1/12 pr-2 flex justify-center text-center items-center p-2">
    {index + 1}
  </div>
  <div class="w-11/12 pl-2 p-2">
    <header class="flex justify-between  items-center">
      <div class="text-lg font-medium">{color.title}</div>
      <div class="font-medium text-sm">{color.percentage}%</div>
    </header>

    <div class="bg-gray-300 w-full h-1">
      <div
        class="bg-red-600 h-full progress"
        style="width: {color.percentage}%" />
    </div>
  </div>
</article>
