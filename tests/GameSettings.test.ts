import { CardSet } from "../src/CardSet";
import { decodeGameSettings, encodeGameSettings } from "../src/GameSettings";
import range from "../src/range";

const cardSets: CardSet[] = [
  { name: "test1", cards: [] },
  { name: "test2", cards: [] },
  { name: "test3", cards: [] },
];

describe("encodeGameSettings", () => {
  it("encodes correctly", () => {
    expect(
      encodeGameSettings({
        cardSets,
        cardSetSelection: [true, false, false],
        seed: 123,
      })
    ).toEqual("988");

    expect(
      encodeGameSettings({
        cardSets,
        cardSetSelection: [false, true, true],
        seed: 123,
      })
    ).toEqual("987");
  });

  it("forbids seed 0", () => {
    expect(
      encodeGameSettings({
        cardSets,
        cardSetSelection: [false, true, true],
        seed: 0,
      })
    ).toBeFalsy();
  });
});

describe("decodeGameSettings", () => {
  it("decodes correctly", () => {
    expect(decodeGameSettings("988", cardSets)).toEqual({
      cardSets: [cardSets[0]],
      cardSetSelection: [true, false, false],
      seed: 123,
    });

    expect(decodeGameSettings("987", cardSets)).toEqual({
      cardSets: [cardSets[1], cardSets[2]],
      cardSetSelection: [false, true, true],
      seed: 123,
    });
  });

  it("handles invalid inputs", () => {
    expect(decodeGameSettings("988", [])).toBeFalsy();
    expect(decodeGameSettings("0", cardSets.slice(0, 2))).toBeFalsy();
    expect(decodeGameSettings("", cardSets)).toBeFalsy();
    expect(decodeGameSettings("9a", cardSets)).toBeFalsy();
    expect(decodeGameSettings("aaa", cardSets)).toBeFalsy();
    expect(decodeGameSettings("-", cardSets)).toBeFalsy();
  });
});

describe("brute force back and forth", () => {
  const generateTestCases = () => {
    const selectionsBitLength = Math.pow(2, cardSets.length);
    const selections = range(selectionsBitLength).map((x) =>
      x
        .toString(2)
        .padStart(3, "0")
        .split("")
        .map((y) => Boolean(Number(y)))
    );
    const seeds = range(1000);

    const cases: [boolean[], number][] = [];
    for (let i = 0; i < selections.length; i++) {
      const selection = selections[i];
      for (let j = 0; j < seeds.length; j++) {
        // Seed 0 is not supported
        const seed = seeds[j] + 1;

        cases.push([selection, seed]);
      }
    }

    return cases;
  };

  test.each(generateTestCases())(
    "selection = %p, seed = %d",
    (cardSetSelection, seed) => {
      const original = {
        cardSetSelection,
        seed,
        cardSets: cardSets.filter((_, i) => cardSetSelection[i]),
      };
      const encoded = encodeGameSettings(original);
      if (!encoded) {
        return;
      }

      const decoded = decodeGameSettings(encoded, cardSets);
      expect(decoded).toEqual(original);
    }
  );
});
