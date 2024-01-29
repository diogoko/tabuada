import { CardSet } from "./CardSet";
import { RandomIntFn } from "./seededRandomIntFn";

export default function generateCardSequence(
  cardSets: CardSet[],
  randomInt: RandomIntFn,
  maxSize: number
) {
  const sequence = [];
  const workCards = cardSets.map(({ cards }) => cards).flat();

  while (workCards.length > 0 && sequence.length < maxSize) {
    const index = randomInt(0, workCards.length);
    const [nextCard] = workCards.splice(index, 1);
    sequence.push(nextCard);
  }

  return sequence;
}
