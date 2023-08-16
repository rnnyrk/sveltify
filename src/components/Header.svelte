<script>
    import { cn } from '$lib';
  import { useMachine } from '@xstate/svelte';
  import { createMachine } from 'xstate';

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
  class={cn("flex items-center w-full fixed top-4 left-4 p-4 rounded-lg bg-gray-200 pointer", {
    'bg-gray-200': $toggleState.value === 'inactive',
    'bg-gray-400': $toggleState.value === 'active'
  })}
>
  <button 
    class="bg-gray-300 hover:bg-gray-500 p-2 rounded-md mr-8"
    on:click={() => setToggle('TOGGLE')}
  >
    {$toggleState.value === 'inactive'
      ? 'Open'
      : 'Close'}
  </button>

  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>