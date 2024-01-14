import { Card } from "./Card";
import { CardSet } from "./CardSet";

export default function createCardSet(n: number): CardSet {
  const cards: Card[] = [];

  for (let x = 2; x <= 9; x++) {
    cards.push({ question: `${n} x ${x}`, answer: (n * x).toString() });
  }

  return { cards, name: `tabuada-${n}` };
}
