import { http, HttpResponse, type HttpHandler } from 'msw';

export const handlers: Array<HttpHandler> = [
  http.get('https://pokeapi.co/api/v2/pokemon/', async () => {
    const list = await import('./fixtures/pokemon-list').then((r) => {
      return r.pokemonList;
    });
    return HttpResponse.json(list);
  }),
  http.get('https://pokeapi.co/api/v2/pokemon/:id', async () => {
    const single = await import('./fixtures/pokemon').then((r) => {
      return r.pokemon;
    });
    return HttpResponse.json(single);
  }),
];
