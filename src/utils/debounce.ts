// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends Fn>(func: T,delay: number = 300): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};