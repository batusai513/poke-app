import { number, pipe, string, transform } from 'valibot';

export const StringNumberSchema = pipe(
  string(),
  transform((input) => parseInt(input, 10)),
  number(),
);
