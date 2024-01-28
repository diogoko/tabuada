import { useState } from "react";
import { AppState } from "./AppState";
import ConfigSharedGame from "./ConfigSharedGame";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";

export default function PlayerApp() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();

  if (state === AppState.Setup) {
    return (
      <ConfigSharedGame
        onPlay={(gameSettings) => {
          setState(AppState.Playing);
          setGameSettings(gameSettings);
        }}
      />
    );
  }

  if (state === AppState.Playing && gameSettings) {
    return <Game gameSettings={gameSettings} mode={GameMode.Question} />;
  }
}
