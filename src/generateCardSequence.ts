import { CardSet } from "./CardSet";
import seededRandomIntFn from "./seededRandomIntFn";

export default function generateCardSequence(
  cardSets: CardSet[],
  seed: number
) {
  const sequence = [];
  const workCards = cardSets.map(({ cards }) => cards).flat();
  const randomInt = seededRandomIntFn(seed);

  while (workCards.length > 0) {
    const index = randomInt(0, workCards.length);
    const [nextCard] = workCards.splice(index, 1);
    sequence.push(nextCard);
  }

  return sequence;
}
