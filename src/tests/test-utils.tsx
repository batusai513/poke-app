import type { ReactElement } from 'react';
import {
  render as baseRender,
  type ComponentRenderOptions,
} from 'vitest-browser-react';
import { test as testBase } from 'vitest';
import { worker } from './mocks/worker';

export * from 'vitest-browser-react';

export function render(ui: ReactElement, options: ComponentRenderOptions = {}) {
  return baseRender(ui, {
    wrapper: ({ children }) => {
      return <>{children}</>;
    },
    ...options,
  });
}

export const test = testBase.extend({
  worker: [
    async ({}, use) => {
      // Start the worker before the test.
      await worker.start();

      // Expose the worker object on the test's context.
      await use(worker);

      // Stop the worker after the test is done.
      worker.stop();
    },
    {
      auto: true,
    },
  ],
});
