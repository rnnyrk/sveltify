import { error, json } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';

import { IO_GPT_KEY } from '$env/static/private';

const COMPLETION_API =
  'https://iogpt-api-management-service.azure-api.net/openai/api/proxy/openai/chat/completions';

export const POST: RequestHandler = async ({ request }) => {
  const { prompt, amountOfParagraphs } = await request.json();

  const maxTokens = 200 * amountOfParagraphs;

  const result = await fetch(COMPLETION_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ['iO-GPT-Subscription-Key']: IO_GPT_KEY
    },
    body: JSON.stringify({
      model: 'gpt-35-turbo',
      max_tokens: maxTokens,
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

// export const GET: RequestHandler = async ({ url, params }: RequestEvent) => {
//   const min = Number(url.searchParams.get('min') ?? '0');
//   const max = Number(url.searchParams.get('max') ?? '1');

//   const d = max - min;

//   if (isNaN(d) || d < 0) {
//     throw error(400, 'min and max must be numbers, and min must be less than max');
//   }

//   const random = min + Math.random() * d;
//   // return new Response(JSON.stringify(params))
//   return new Response(String(random));
// };
