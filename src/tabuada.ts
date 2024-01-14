import { Card } from "./Card";
import { CardSet } from "./CardSet";

export function createCardSet(n: number): CardSet {
  const cards: Card[] = [];

  for (let x = 2; x <= 9; x++) {
    cards.push({ question: `${n} x ${x}`, answer: (n * x).toString() });
  }

  return { cards, name: `tabuada-${n}` };
}

export function createAllCardSets() {
  const cardSets: CardSet[] = [];

  for (let i = 2; i <= 9; i++) {
    cardSets.push(createCardSet(i));
  }

  return cardSets;
}
