import { useState } from "react";
import "./App.css";
import { createCardSet } from "./tabuada";
import Game from "./Game";
import { GameMode } from "./GameMode";
import generateCardSequence from "./generateCardSequence";
import GameSetup from "./GameSetup";
import { AppState } from "./AppState";
import { GameSettings } from "./GameSettings";
import { Card } from "./Card";
import ShareGame from "./ShareGame";

function App() {
  const [state, setState] = useState(AppState.Setup);
  const [gameSettings, setGameSettings] = useState<GameSettings | undefined>();
  const [sequence, setSequence] = useState<Card[]>([]);

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

      {state === AppState.Playing && (
        <Game cardSequence={sequence} mode={GameMode.Answer} />
      )}
    </div>
  );
}

export default App;
