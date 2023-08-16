<script lang="ts">
  import type { openai } from 'chatgpt';
  import { summary, filter } from '$lib/stores';
  import { cn } from '$lib';
  import FilterBar from './FilterBar.svelte';
  import FilterSvg from './svg/FilterSvg.svelte';
  import LoadingSvg from './svg/LoadingSvg.svelte';

  let isFilterOpen = false;
  let result: undefined | openai.CreateChatCompletionResponse;

  async function runGpt() {
    $summary.state = 'loading';
    const data = new FormData(this);

    let language = $filter.language === 'en' ? 'English' : 'Dutch';

    const url = data.get('url') as string;
    const prompt = `Make a ${$filter.paragraphs} paragraph summary of this article ${url}, use markdown syntax with <p> tags for paragraphs and include the title above the summary. Do everything in ${language}`;

    try {
      const response = await fetch('/api/gpt', {
        method: 'POST',
        body: JSON.stringify({
          prompt,
          amountOfParagraphs: $filter.paragraphs,
          toneOfVoice: $filter.tone,
          language: $filter.language
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      result = await response.json();
      $summary = {
        state: 'success',
        result
      };
    } catch (error) {
      $summary.state = 'error';
      throw error;
    }
  }
</script>

<header
  class="w-[calc(100vw-2rem)] flex flex-col fixed top-4 left-4 p-4 rounded-lg bg-gray-200 shadow-lg"
>
  <div class="flex items-center">
    <button
      class="flex items-center justify-center h-10 w-10 bg-gray-300 hover:bg-gray-200 p-2 rounded-md"
      on:click={() => (isFilterOpen = !isFilterOpen)}
    >
      <FilterSvg />
    </button>

    <form
      method="POST"
      class="w-full flex"
      on:submit|preventDefault={runGpt}
    >
      <input
        type="text"
        name="url"
        class="w-full p-2 mx-4 rounded-md bg-gray-100"
        placeholder="Fill in a url..."
        required
      />

      <button
        disabled={$summary.state === 'loading'}
        type="submit"
        class={cn(
          'py-2 px-4 font-bold rounded-md bg-blue-200 hover:bg-blue-400 transition-colors',
          'disabled:bg-gray-600 disabled:cursor-not-allowed',
          {
            'bg-red-400': $summary.state === 'error'
          }
        )}
      >
        {#if $summary.state === 'loading'}
          <LoadingSvg />
        {:else}
          Summarize
        {/if}
      </button>
    </form>
  </div>

  {#if isFilterOpen}
    <FilterBar />
  {/if}
</header>
