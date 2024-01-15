import { useState } from "react";
import "./App.css";
import { AppState } from "./AppState";
import { Card } from "./Card";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";
import GameSetup from "./GameSetup";
import ShareGame from "./ShareGame";

export default function ControllerApp() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();

  return (
    <div>
      {state === AppState.Setup && (
        <GameSetup
          onDone={(settings) => {
            setGameSettings(settings);
            setState(AppState.Share);
          }}
        />
      )}

      {state === AppState.Share && gameSettings && (
        <ShareGame
          gameSettings={gameSettings}
          onPlay={() => setState(AppState.Playing)}
        />
      )}

      {/* {state === AppState.Playing && (
        <Game cardSequence={sequence} mode={GameMode.Answer} />
      )} */}
    </div>
  );
}
