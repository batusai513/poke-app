import {
  object,
  optional,
  parse,
  pipe,
  string,
  transform,
  type InferOutput,
} from 'valibot';

const coerceBoolean = pipe(
  string(),
  transform((value) => {
    return JSON.parse(value) as boolean;
  }),
);

const EnvSchema = object({
  ENABLE_MSW: optional(coerceBoolean, 'false'),
  API_URL: string('API_URL is requirida'),
});

export type EnvSchemaOutput = InferOutput<typeof EnvSchema>;

export function parseEnv(env: unknown): EnvSchemaOutput {
  return parse(EnvSchema, env);
}
