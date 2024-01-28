import { useState } from "react";
import "./App.css";
import { AppState } from "./AppState";
import ConfigSharedGame from "./ConfigSharedGame";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";

export default function PlayerApp() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();

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

      {state === AppState.Playing && gameSettings && (
        <Game gameSettings={gameSettings} mode={GameMode.Question} />
      )}
    </div>
  );
}
