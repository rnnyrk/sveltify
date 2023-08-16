import { writable } from 'svelte/store';
import type { openai } from 'chatgpt';

type SummaryProps = {
  result: undefined | openai.CreateChatCompletionResponse;
  state: 'idle' | 'loading' | 'error' | 'success';
};

export const summary = writable<SummaryProps>({
  result: undefined,
  state: 'idle'
});

type FilterProps = {
  paragraphs: number;
  tone: 'strict' | 'neutral' | 'creative';
  language: 'en' | 'nl';
};

export const filter = writable<FilterProps>({
  paragraphs: 1,
  tone: 'neutral',
  language: 'en'
});
