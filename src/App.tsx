import { useState } from "react";
import ControllerApp from "./ControllerApp";
import { GameMode } from "./GameMode";
import PlayerApp from "./PlayerApp";
import Button from "./Button";
import { getQueryParameter } from "./queryParameters";

function App() {
  const initialMode = getQueryParameter("code") ? GameMode.Question : undefined;
  const [mode, setMode] = useState<GameMode | undefined>(initialMode);

  if (mode === undefined) {
    return (
      <div className="flex flex-col gap-10">
        <Button onClick={() => setMode(GameMode.Answer)}>Teacher</Button>
        <Button onClick={() => setMode(GameMode.Question)}>Student</Button>
      </div>
    );
  }

  if (mode === GameMode.Answer) {
    return <ControllerApp />;
  }

  if (mode === GameMode.Question) {
    return <PlayerApp />;
  }
}

export default App;
