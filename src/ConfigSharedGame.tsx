import { useMemo, useState } from "react";
import { GameSettings, decodeGameSettings } from "./GameSettings";
import { createAllCardSets } from "./tabuada";

export interface ConfigSharedGameProps {
  onPlay: (gameSettings: GameSettings) => void;
}

const cardSets = createAllCardSets();

export default function ConfigSharedGame({ onPlay }: ConfigSharedGameProps) {
  const [gameCode, setGameCode] = useState("");
  const gameSettings = useMemo(
    () => decodeGameSettings(gameCode, cardSets),
    [gameCode]
  );

  return (
    <div className="flex flex-col gap-10">
      <div>
        <input
          type="tel"
          value={gameCode}
          onChange={(event) => setGameCode(event.target.value)}
        />
      </div>
      <div>
        <button
          className="border-2 border-gray-100 rounded-xl p-6 w-full md:w-2/3 cursor-pointer bg-teal-800 hover:border-teal-500 hover:bg-teal-700 disabled:bg-gray-700"
          type="button"
          disabled={!gameSettings}
          onClick={() => onPlay(gameSettings as GameSettings)}
        >
          Play
        </button>
      </div>
    </div>
  );
}
