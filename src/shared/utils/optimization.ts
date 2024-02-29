export const throttle = <R, A extends any[]>(
  fn: (...args: A) => R,
  delay: number
): [(...args: A) => R | undefined, () => void, { delay: number }] => {
  let wait = false;
  let timeout: ReturnType<typeof setTimeout>;
  let cancelled = false;
  const options = {
    delay,
  };

  return [
    (...args: A) => {
      if (cancelled) return undefined;
      if (wait) return undefined;

      const val = fn(...args);

      wait = true;

      timeout = setTimeout(() => {
        wait = false;
      }, options.delay);

      return val;
    },
    () => {
      cancelled = true;
      clearTimeout(timeout);
    },
    options,
  ];
};
