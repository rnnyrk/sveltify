import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { GPT_URL, GPT_KEY } from '$env/static/private';

const COMPLETION_API = `${GPT_URL}/api/proxy/openai/chat/completions`;

export const POST: RequestHandler = async ({ request }) => {
  const { prompt, amountOfParagraphs, toneOfVoice } = await request.json();

  const max_tokens = 200 * amountOfParagraphs;

  let temperature = 0.9;
  if (toneOfVoice === 'strict') {
    temperature = 0.1;
  } else if (toneOfVoice === 'creative') {
    temperature = 1.2;
  }

  const result = await fetch(COMPLETION_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ['iO-GPT-Subscription-Key']: GPT_KEY
    },
    body: JSON.stringify({
      model: 'gpt-35-turbo',
      max_tokens,
      temperature,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  });

  const body = await result.json();
  return json(body);
};
