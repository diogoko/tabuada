import { Card } from "./Card";

export default function generateCardSequence(cards: Card[]) {
  const sequence = [];
  const workCards = [...cards];

  while (workCards.length > 0) {
    const index = Math.trunc(Math.random() * workCards.length);
    const [nextCard] = workCards.splice(index, 1);
    sequence.push(nextCard);
  }

  return sequence;
}
