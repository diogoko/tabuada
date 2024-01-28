import { useState } from "react";
import { AppState } from "./AppState";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";
import GameSetup from "./GameSetup";
import ShareGame from "./ShareGame";

export default function ControllerApp() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();

  if (state === AppState.Setup) {
    return (
      <GameSetup
        onDone={(settings) => {
          setGameSettings(settings);
          setState(AppState.Share);
        }}
      />
    );
  }

  if (state === AppState.Share && gameSettings) {
    return (
      <ShareGame
        gameSettings={gameSettings}
        onPlay={() => {
          setState(AppState.Playing);
        }}
      />
    );
  }

  if (state === AppState.Playing && gameSettings) {
    return <Game gameSettings={gameSettings} mode={GameMode.Answer} />;
  }
}
