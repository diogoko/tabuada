import random from "random";

export default function seededRandomIntFn(seed: number) {
  const r = random.clone(seed);
  return (min: number, maxExclusive: number) => r.int(min, maxExclusive - 1);
}
