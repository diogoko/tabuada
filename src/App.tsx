import { useState } from "react";
import "./App.css";
import ControllerApp from "./ControllerApp";
import { GameMode } from "./GameMode";
import PlayerApp from "./PlayerApp";

function App() {
  const [mode, setMode] = useState<GameMode | undefined>();

  return (
    <div>
      {mode === undefined && (
        <div>
          <button type="button" onClick={() => setMode(GameMode.Answer)}>
            Teacher
          </button>
          <button type="button" onClick={() => setMode(GameMode.Question)}>
            Student
          </button>
        </div>
      )}

      {mode === GameMode.Answer && <ControllerApp />}

      {mode === GameMode.Question && <PlayerApp />}
    </div>
  );
}

export default App;
