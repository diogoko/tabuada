import { useMemo, useState } from "react";
import "./App.css";
import { AppState } from "./AppState";
import ConfigSharedGame from "./ConfigSharedGame";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";
import generateCardSequence from "./generateCardSequence";

export default function PlayerApp() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();

  const sequence = useMemo(
    () =>
      gameSettings
        ? generateCardSequence(gameSettings.cardSets, gameSettings.seed)
        : [],
    [gameSettings]
  );

  return (
    <div>
      {state === AppState.Setup && (
        <ConfigSharedGame
          onPlay={(gameSettings) => {
            setState(AppState.Playing);
            setGameSettings(gameSettings);
          }}
        />
      )}

      {state === AppState.Playing && (
        <Game cardSequence={sequence} mode={GameMode.Question} />
      )}
    </div>
  );
}
