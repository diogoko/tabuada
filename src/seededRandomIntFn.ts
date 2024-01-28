import random from "random";

export type RandomIntFn = (min: number, maxExclusive: number) => number;

export default function seededRandomIntFn(seed: number): RandomIntFn {
  const r = random.clone(seed);
  return (min: number, maxExclusive: number) => r.int(min, maxExclusive - 1);
}
