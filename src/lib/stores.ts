import { writable } from 'svelte/store';
import type { openai } from 'chatgpt';

export const summary = writable<
  undefined | openai.CreateChatCompletionResponse
>(undefined);

export type FilterProps = {
  paragraphs: number;
};

export const filter = writable<FilterProps>({
  paragraphs: 1
});
