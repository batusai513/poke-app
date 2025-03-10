import { parseEnv } from '~/shared/modules/schemas/env.schema';

export const env = parseEnv({
  ENABLE_MSW: import.meta.env.VITE_ENABLE_MSW,
  API_URL: import.meta.env.VITE_API_URL,
});
