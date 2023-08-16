<script lang="ts">
  import { cn } from '$lib';
  import { useMachine } from '@xstate/svelte';
  import { createMachine } from 'xstate';
  import { summary } from '$lib/stores';
  import type { openai } from 'chatgpt';

  let result: undefined | openai.CreateChatCompletionResponse;

  async function runGpt() {
    const data = new FormData(this);

    const prompt = `Summarize the article in this link ${data.get('url')}`;

    const response = await fetch('/api/gpt', {
      method: 'POST',
      body: JSON.stringify({
        prompt
      }),
      headers: {
        'content-type': 'application/json'
      }
    });

    result = await response.json();
    $summary = result;
  }

  const toggleMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: {
        on: {
          TOGGLE: 'active'
        }
      },
      active: {
        on: {
          TOGGLE: 'inactive'
        }
      }
    }
  });

  const { state: toggleState, send: setToggle } = useMachine(toggleMachine);
</script>

<header
  class="w-[calc(100vw-2rem)] flex flex-col fixed top-4 left-4 p-4 rounded-lg bg-gray-200 shadow-lg"
>
  <div class="flex items-center">
    <button
      class="flex items-center justify-center h-10 w-10 bg-gray-300 hover:bg-gray-200 p-2 rounded-md"
      on:click={() => setToggle('TOGGLE')}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 3 4.04 3 4.6 3h14.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 3.76 21 4.04 21 4.6v1.737c0 .245 0 .367-.028.482a.998.998 0 0 1-.12.29c-.061.1-.148.187-.32.36l-6.063 6.062c-.173.173-.26.26-.322.36a.998.998 0 0 0-.12.29c-.027.115-.027.237-.027.482V17l-4 4v-6.337c0-.245 0-.367-.028-.482a1 1 0 0 0-.12-.29c-.061-.1-.148-.187-.32-.36L3.468 7.47c-.173-.173-.26-.26-.322-.36a1 1 0 0 1-.12-.29C3 6.704 3 6.582 3 6.337V4.6Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
        required
      />

      <button
        type="submit"
        class="py-2 px-4 font-bold rounded-md bg-blue-200 hover:bg-blue-400 transition-colors"
      >
        Summarize
      </button>
    </form>
  </div>

  {#if $toggleState.value === 'active'}
    <div class="w-full mt-4">Subheader</div>
  {/if}
</header>
