import { useState } from "react";
import Toggle from "./Toggle";
import { createAllCardSets } from "./tabuada";
import { GameSettings, createGameSettings } from "./GameSettings";
import Button from "./Button";

export interface GameSetupProps {
  onDone: (settings: GameSettings) => void;
}

const cardSets = createAllCardSets();

export default function GameSetup({ onDone }: GameSetupProps) {
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
        <Button
          disabled={!hasSelected}
          onClick={() => onDone(createGameSettings(cardSets, cardSetSelection))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
