<script lang="ts">
  import { cn } from '$lib';
  import { filter } from '$lib/stores';
</script>

<div class="w-full mt-4 flex items-center">
  <div class="flex flex-col">
    <strong>Paragraphs</strong>
    <div class="flex border-[1px] mt-2 border-gray-400 rounded-md">
      {#each { length: 3 } as _, i}
        {@const curInt = i + 1}
        <button
          on:click={() => ($filter.paragraphs = curInt)}
          class={cn(
            'flex items-center justify-center h-10 w-10',
            'bg-gray-300 hover:bg-gray-200',
            {
              'rounded-l-md': i === 0,
              'rounded-r-md': i === 2,
              'bg-gray-200': $filter.paragraphs === curInt
            }
          )}
        >
          {curInt}
        </button>
      {/each}
    </div>
  </div>
</div>
