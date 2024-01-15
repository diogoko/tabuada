export default function nonZeroRandomInt(maxExclusive: number) {
  let n = 0;
  while (n === 0) {
    n = Math.trunc(Math.random() * maxExclusive);
  }

  return n;
}
