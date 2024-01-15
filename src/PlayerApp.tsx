import { useState } from "react";
import "./App.css";
import { AppState } from "./AppState";
import { Card } from "./Card";
import Game from "./Game";
import { GameMode } from "./GameMode";
import { GameSettings } from "./GameSettings";
import GameSetup from "./GameSetup";
import ShareGame from "./ShareGame";
import ConfigSharedGame from "./ConfigSharedGame";

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

      {state === AppState.Playing && (
        <Game cardSequence={[]} mode={GameMode.Answer} />
      )}
    </div>
  );
}
