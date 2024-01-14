import { useState } from "react";
import "./App.css";
import createCardSet from "./tabuada";
import Game from "./Game";
import { GameMode } from "./GameMode";
import generateCardSequence from "./generateCardSequence";

function App() {
  const [set] = useState(createCardSet(2));
  const [sequence] = useState(generateCardSequence(set.cards));

  return (
    <>
      <Game cardSequence={sequence} mode={GameMode.Answer} />
    </>
  );
}

export default App;
