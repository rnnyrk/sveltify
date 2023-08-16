<script lang="ts">
  import type { openai } from 'chatgpt';

  let summary: undefined | openai.CreateChatCompletionResponse = undefined;

  async function runGpt() {
    const response = await fetch('/api/gpt', {
      method: 'POST',
      body: JSON.stringify({
        prompt:
          'Summarize the article in this link https://nos.nl/artikel/2486797-cbs-nederland-in-een-milde-recessie-al-een-half-jaar-krimpt-de-economie'
      }),
      headers: {
        'content-type': 'application/json'
      }
    });

    summary = await response.json();
    console.log({ summary });
  }
</script>

<button
  class="mt-4 py-2 px-4 font-bold rounded-md bg-blue-200 hover:bg-blue-400 transition-colors"
  on:click={runGpt}
>
  Summarize
</button>

{#if summary}
  <article>
    {summary.choices[0].message?.content}
  </article>
{/if}
