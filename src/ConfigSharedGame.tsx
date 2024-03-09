import { useMemo, useState } from "react";
import { GameSettings, decodeGameSettings } from "./GameSettings";
import { createAllCardSets } from "./tabuada";
import Button from "./Button";
import CodeInput from "./CodeInput";
import { getQueryParameter } from "./queryParameters";

export interface ConfigSharedGameProps {
  onPlay: (gameSettings: GameSettings) => void;
}

const cardSets = createAllCardSets();

export default function ConfigSharedGame({ onPlay }: ConfigSharedGameProps) {
  const [gameCode, setGameCode] = useState(getQueryParameter("code") ?? "");
  const gameSettings = useMemo(
    () => decodeGameSettings(gameCode, cardSets),
    [gameCode]
  );

  return (
    <div className="flex flex-col gap-10">
      <div>
        <CodeInput value={gameCode} onChange={(value) => setGameCode(value)} />
      </div>
      <div className="flex justify-center">
        <Button
          disabled={!gameSettings}
          onClick={() => onPlay(gameSettings as GameSettings)}
        >
          Play
        </Button>
      </div>
    </div>
  );
}
