import { writable } from 'svelte/store';
import type { openai } from 'chatgpt';

export const summary = writable<
  undefined | openai.CreateChatCompletionResponse
>(undefined);

export type FilterProps = {
  paragraphs: number;
  tone: 'strict' | 'neutral' | 'creative';
};

export const filter = writable<FilterProps>({
  paragraphs: 1,
  tone: 'neutral'
});
