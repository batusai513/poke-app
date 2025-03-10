import type { Route } from './+types/home';

export default function Home() {
  return <>Initial</>;
}

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Pokemons' },
    { name: 'description', content: 'Welcome to the Pokemon world' },
  ];
}
