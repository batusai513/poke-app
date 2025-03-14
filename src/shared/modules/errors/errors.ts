import type { BaseIssue, BaseSchema, BaseSchemaAsync } from 'valibot';
import { HTTPError, TimeoutError as OriginalTimeoutError } from 'ky';
import { match, P } from 'ts-pattern';
import { flatten, ValiError } from 'valibot';

interface IBaseError {
  type: string;
  getMessage: () => string;
}

export class BaseError extends Error implements IBaseError {
  type = 'base-error';
  getMessage() {
    return this.message;
  }
}

export class BadArgumentsError extends BaseError {
  type = 'bad-arguments-error';
  constructor(message: string, cause: Error) {
    super(message, { cause });
  }
}

export class HttpError extends BaseError {
  type = 'http-error';
  statusCode: number;
  constructor(message: string, cause: HTTPError) {
    super(message);
    this.cause = cause;
    this.statusCode = cause.response.status;
  }
  getMessage(): string {
    return `Request failed with status: ${this.statusCode.toString()}, message: ${
      this.message
    }`;
  }
}

export class TimeoutError extends BaseError {
  type = 'timeout-error';
  constructor(cause: OriginalTimeoutError, message?: string) {
    super(message);
    this.cause = cause;
  }
}

export class ParseSchemaError extends BaseError {
  readonly type = 'parse-schema-error';
  readonly parsedMessage: string;
  readonly detailedErrors: Array<string>;
  constructor(
    cause: ValiError<
      | BaseSchema<unknown, unknown, BaseIssue<unknown>>
      | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>
    >,
    message?: string,
  ) {
    super(message);
    this.cause = cause;
    this.parsedMessage = createValiErrorMessages(cause);
    this.detailedErrors = cause.issues.map((issue) => {
      const { path, message, expected, received, kind } = issue;
      const p = path ?? [];
      const parsedPath = p.map((p) => p.key).join('.');
      const field: string = (p.at(-1)?.key as string | undefined) ?? '';
      const where =
        parsedPath && field ? `for field ${field} at ${parsedPath}` : '';
      return `${kind.toUpperCase()} error, expected: '${
        expected ?? ''
      }', received: ${received} ${where} with message: "${message}"`.trim();
    });
  }

  getMessage(): string {
    return `Validation failed with errors: ${this.parsedMessage}`;
  }
}

export class StorageError extends BaseError {
  readonly type = 'storage-error';
}

export class UnknownError extends BaseError {
  readonly type = 'unknown-error';
}

export function createRequestError(
  error: unknown,
  messages: { httpError: string },
): HttpError | TimeoutError | UnknownError {
  return match(error)
    .with(P.instanceOf(HTTPError), (e) => {
      return new HttpError(messages.httpError, e);
    })
    .with(P.instanceOf(OriginalTimeoutError), (e) => {
      return new TimeoutError(e);
    })
    .with(P.instanceOf(Error), (e) => {
      return new BaseError(e.message, { cause: error });
    })
    .otherwise(() => {
      return new UnknownError();
    });
}

export function createValidationError(
  error: unknown,
): ParseSchemaError | BaseError | UnknownError {
  return match(error)
    .with(P.instanceOf(ValiError), (e) => {
      return new ParseSchemaError(e);
    })
    .with(P.instanceOf(Error), (e) => {
      return new BaseError(e.message, { cause: e });
    })
    .otherwise(() => {
      return new UnknownError();
    });
}

export function queryRetryFn(
  failureCount: number,
  error: ServiceError,
): boolean {
  return match(error)
    .with(P.instanceOf(HttpError), ({ statusCode }) => {
      return statusCode >= 400 && statusCode < 500 && failureCount < 3;
    })
    .with(P.instanceOf(TimeoutError), () => {
      return failureCount < 3;
    })
    .otherwise(() => {
      return false;
    });
}

function createValiErrorMessages(
  error: ValiError<
    | BaseSchema<unknown, unknown, BaseIssue<unknown>>
    | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>
  >,
) {
  const issues = flatten(error.issues);
  return getErrorMessages(issues.nested ?? {});
}

function getErrorMessages(
  flattenErrors: Record<string, Array<string> | undefined>,
): string {
  return (
    Object.entries(flattenErrors)
      .flatMap(([_, value]) => {
        const message = value ? value.join(', ') : '';
        return message;
      })
      .join('\n')
  );
}
export type ServiceError =
  | BadArgumentsError
  | HttpError
  | TimeoutError
  | ParseSchemaError
  | BaseError
  | UnknownError;
