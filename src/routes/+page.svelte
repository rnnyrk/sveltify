<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';
  import { summary } from '$lib/stores';
  import LoadingSvg from 'components/svg/LoadingSvg.svelte';
</script>

{#if $summary.state !== 'idle'}
  <article class="max-w-[40rem] mt-8 mx-auto p-8 bg-gray-100 rounded-lg">
    {#if $summary.state === 'loading'}
      <LoadingSvg />
    {:else if $summary.state === 'success' && $summary.result}
      <SvelteMarkdown source={$summary.result.choices[0].message?.content} />
    {/if}
  </article>
{/if}
