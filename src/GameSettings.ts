import { CardSet } from "./CardSet";

export interface GameSettings {
  cardSets: CardSet[];
  cardSetSelection: boolean[];
  seed: number;
}

export function encodeGameSettings({ cardSetSelection, seed }: GameSettings) {
  const cardSetsBits = cardSetSelection.map((x) => `${Number(x)}`).join("");
  const seedBits = seed.toString(2);
  const allBits = `${cardSetsBits}${seedBits}`;

  return parseInt(allBits, 2).toString();
}

export function decodeGameSettings(
  code: string,
  allCardSets: CardSet[]
): GameSettings {
  const allBits = parseInt(code).toString(2);
  const cardSetsBits = allBits.slice(0, allCardSets.length);
  const seedBits = allBits.slice(cardSetsBits.length);

  const cardSetSelection = cardSetsBits
    .split("")
    .map((x) => Boolean(Number(x)));

  const cardSets = allCardSets.filter(
    (_cardSet, cardSetIndex) => cardSetSelection[cardSetIndex]
  );

  const seed = parseInt(seedBits, 2);

  return {
    cardSets,
    cardSetSelection,
    seed,
  };
}
