<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { summary } from '$lib/stores';
</script>

{#if $summary}
  <article class="max-w-[40rem] mt-8 mx-auto p-8 bg-gray-100 rounded-lg">
    <SvelteMarkdown source={$summary.choices[0].message?.content} />
  </article>
{/if}
