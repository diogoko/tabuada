import { useState } from "react";
import Toggle from "./Toggle";
import { createAllCardSets } from "./tabuada";
import { GameSettings, createGameSettings } from "./GameSettings";

export interface GameSetupProps {
  onDone: (settings: GameSettings) => void;
}

export default function GameSetup({ onDone }: GameSetupProps) {
  const cardSets = createAllCardSets();
  const [cardSetSelection, setCardSetSelection] = useState<boolean[]>(
    Array(cardSets.length).fill(false)
  );

  const setSelection = (index: number, value: boolean) => {
    setCardSetSelection([
      ...cardSetSelection.slice(0, index),
      value,
      ...cardSetSelection.slice(index + 1),
    ]);
  };

  const hasSelected = cardSetSelection.some((x) => x);

  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 gap-6">
        {cardSets.map((cardSet, cardSetIndex) => (
          <Toggle
            key={cardSet.name}
            value={cardSetSelection[cardSetIndex]}
            onChange={(value) => setSelection(cardSetIndex, value)}
          >
            {cardSet.name}
          </Toggle>
        ))}
      </div>

      <div>
        <button
          className="border-2 border-gray-100 rounded-xl p-6 w-full md:w-2/3 cursor-pointer bg-teal-800 hover:border-teal-500 hover:bg-teal-700 disabled:bg-gray-700"
          type="button"
          disabled={!hasSelected}
          onClick={() => onDone(createGameSettings(cardSets, cardSetSelection))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
