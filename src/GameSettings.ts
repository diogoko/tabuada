import { CardSet } from "./CardSet";

export interface GameSettings {
  cardSets: CardSet[];
  cardSetSelection: boolean[];
  seed: number;
}

export function createGameSettings(
  cardSets: CardSet[],
  cardSetSelection: boolean[]
) {
  let nonZeroSeed = 0;
  while (nonZeroSeed === 0) {
    nonZeroSeed = Math.trunc(Math.random() * 1000);
  }

  return {
    cardSets: cardSets.filter(
      (_cardSet, cardSetIndex) => cardSetSelection[cardSetIndex]
    ),
    cardSetSelection,
    seed: nonZeroSeed,
  };
}

export function encodeGameSettings({ cardSetSelection, seed }: GameSettings) {
  if (seed === 0) {
    return false;
  }

  const cardSetsBits = cardSetSelection.map((x) => `${Number(x)}`).join("");
  const seedBits = seed.toString(2);
  const allBits = `${seedBits}${cardSetsBits}`;

  return parseInt(allBits, 2).toString();
}

export function decodeGameSettings(
  code: string,
  allCardSets: CardSet[]
): GameSettings | false {
  if (!code || typeof code !== "string" || !/^[0-9]+$/.test(code)) {
    return false;
  }

  const allBits = parseInt(code).toString(2);
  const cardSetsBits = allBits.slice(-allCardSets.length);
  if (cardSetsBits.length !== allCardSets.length) {
    return false;
  }

  const seedBits = allBits.slice(0, allBits.length - cardSetsBits.length);

  const cardSetSelection = cardSetsBits
    .split("")
    .map((x) => Boolean(Number(x)));

  const cardSets = allCardSets.filter(
    (_cardSet, cardSetIndex) => cardSetSelection[cardSetIndex]
  );

  const seed = parseInt(seedBits || "0", 2);

  return {
    cardSets,
    cardSetSelection,
    seed,
  };
}
