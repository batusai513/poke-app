import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { env } from '~/env/env';

async function prepareApp() {
  if (env.ENABLE_MSW) {
    const { worker } = await import('~/tests/mocks/worker');
    return worker.start();
  }

  return Promise.resolve();
}

void prepareApp().then(() => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>,
    );
  });
});
