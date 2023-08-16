import { writable } from 'svelte/store';
import type { openai } from 'chatgpt';

export const summary = writable<undefined | openai.CreateChatCompletionResponse>(undefined);
