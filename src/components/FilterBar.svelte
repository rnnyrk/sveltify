<script lang="ts">
  import { cn } from '$lib';
  import { filter } from '$lib/stores';
  import FilterOption from './FilterOption.svelte';

  const filterClasses =
    'flex items-center justify-center h-10 px-2 bg-gray-300 hover:bg-gray-200';
</script>

<div class="w-full mt-4 flex items-center bg-gray-300 p-4 rounded-md">
  <FilterOption title="Paragraphs">
    {#each { length: 3 } as _, i}
      {@const curInt = i + 1}
      <button
        on:click={() => ($filter.paragraphs = curInt)}
        class={cn(filterClasses, 'h-10 w-10', {
          'rounded-l-md': i === 0,
          'rounded-r-md': i === 2,
          'bg-blue-200 hover:bg-blue-200': $filter.paragraphs === curInt
        })}
      >
        {curInt}
      </button>
    {/each}
  </FilterOption>

  <FilterOption title="Tone of Voice">
    <button
      on:click={() => ($filter.tone = 'strict')}
      class={cn(filterClasses, 'rounded-l-md', {
        'bg-blue-200 hover:bg-blue-200': $filter.tone === 'strict'
      })}
    >
      Scrict
    </button>

    <button
      on:click={() => ($filter.tone = 'neutral')}
      class={cn(filterClasses, 'h-10 px-2', {
        'bg-blue-200 hover:bg-blue-200': $filter.tone === 'neutral'
      })}
    >
      Neutral
    </button>

    <button
      on:click={() => ($filter.tone = 'creative')}
      class={cn(filterClasses, 'h-10 px-2', 'rounded-r-md', {
        'bg-blue-200 hover:bg-blue-200': $filter.tone === 'creative'
      })}
    >
      Creative
    </button>
  </FilterOption>

  <FilterOption title="Language">
    <button
      on:click={() => ($filter.language = 'en')}
      class={cn(filterClasses, 'h-10 px-2', 'rounded-l-md', {
        'bg-blue-200 hover:bg-blue-200': $filter.language === 'en'
      })}
    >
      English
    </button>

    <button
      on:click={() => ($filter.language = 'nl')}
      class={cn(filterClasses, 'h-10 px-2', 'rounded-r-md', {
        'bg-blue-200 hover:bg-blue-200': $filter.language === 'nl'
      })}
    >
      Nederlands
    </button>
  </FilterOption>
</div>
