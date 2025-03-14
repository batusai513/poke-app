import {
  array,
  integer,
  nullable,
  number,
  object,
  pipe,
  string,
  url,
  type BaseIssue,
  type BaseSchema,
} from 'valibot';

export function createPaginatedResponseSchema<
  ResponseSchema extends BaseSchema<unknown, unknown, BaseIssue<unknown>>,
>(response: ResponseSchema) {
  return object({
    count: pipe(number(), integer()),
    next: nullable(
      pipe(
        string("el campo 'next' debe ser una cadena de texto"),
        url("el campo 'next' debe tener formato de url"),
      ),
    ),
    previous: nullable(
      pipe(
        string("el campo 'next' debe ser una cadena de texto"),
        url("el campo 'next' debe tener formato de url"),
      ),
    ),
    results: array(response),
  });
}
