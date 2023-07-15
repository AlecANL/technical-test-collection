declare global {
  interface Array<T> {
    // eslint-disable-next-line @typescript-eslint/method-signature-style
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}
