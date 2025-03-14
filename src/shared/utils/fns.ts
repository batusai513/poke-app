export function identity<T>(param: T): T {
  return param;
}

export function rejectError<T>(error: T) {
  // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
  return Promise.reject(error);
}
