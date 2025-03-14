import { object, optional, parse, type InferOutput } from 'valibot';
import { StringNumberSchema } from './utils';

const QueryPaginationSchema = object({
  page: optional(StringNumberSchema, '0'),
});

export type QueryPaginationSchema = InferOutput<typeof QueryPaginationSchema>;

export function parseQueryPaginationSchema(payload: unknown) {
  return parse(QueryPaginationSchema, payload);
}
