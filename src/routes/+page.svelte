<script lang="ts">
  import { getContext } from 'svelte';
  import type { openai } from 'chatgpt';
  import { readable, get } from 'svelte/store';

  import { summary } from '$lib/stores';
</script>

{#if $summary}
  <article class="max-w-[40rem] mt-8 mx-auto p-4 bg-gray-100 rounded-lg">
    {$summary.choices[0].message?.content}
  </article>
{/if}
