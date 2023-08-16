<script lang="ts">
  import { cn } from '$lib';
  import { filter } from '$lib/stores';
  import FilterOption from './FilterOption.svelte';
</script>

<div class="w-full mt-4 flex items-center">
  <FilterOption title="Paragraphs">
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
            'bg-blue-200 hover:bg-blue-200': $filter.paragraphs === curInt
          }
        )}
      >
        {curInt}
      </button>
    {/each}
  </FilterOption>

  <FilterOption title="Tone of Voice">
    <button
      on:click={() => {
        $filter.tone = 'strict';
      }}
      class={cn(
        'flex items-center justify-center h-10 px-2',
        'bg-gray-300 hover:bg-gray-200',
        'rounded-l-md',
        {
          'bg-blue-200 hover:bg-blue-200': $filter.tone === 'strict'
        }
      )}
    >
      Scrict
    </button>

    <button
      on:click={() => {
        $filter.tone = 'neutral';
      }}
      class={cn(
        'flex items-center justify-center h-10 px-2',
        'bg-gray-300 hover:bg-gray-200',
        {
          'bg-blue-200 hover:bg-blue-200': $filter.tone === 'neutral'
        }
      )}
    >
      Neutral
    </button>

    <button
      on:click={() => {
        $filter.tone = 'creative';
      }}
      class={cn(
        'flex items-center justify-center h-10 px-2',
        'bg-gray-300 hover:bg-gray-200',
        'rounded-r-md',
        {
          'bg-blue-200 hover:bg-blue-200': $filter.tone === 'creative'
        }
      )}
    >
      Creative
    </button>
  </FilterOption>
</div>
