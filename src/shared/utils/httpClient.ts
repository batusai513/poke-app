import ky from 'ky';
import { env } from '~/env/env';

export const httpClient = ky.create({
  prefixUrl: `${env.API_URL}/api/v2/`,
  retry: 2,
});
