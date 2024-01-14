import { useEffect, useState } from "react";
import { Card } from "./Card";
import { GameMode } from "./GameMode";
import CardRendering from "./CardRendering";
import BeforeGameCard from "./BeforeGameCard";
import AfterGameCard from "./AfterGameCard";

export interface GameProps {
  cardSequence: Card[];
  mode: GameMode;
}

export default function Game({ cardSequence, mode }: GameProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [gameStart, setGameStart] = useState(0);
  const [gameEnd, setGameEnd] = useState(0);

  const beforeGame = currentIndex < 0;
  const gameRunning = currentIndex >= 0 && currentIndex < cardSequence.length;
  const gameEnded = currentIndex >= cardSequence.length;

  useEffect(() => {
    if (currentIndex >= cardSequence.length) {
      setGameEnd(new Date().getTime());
    }
  }, [currentIndex, cardSequence.length]);

  return (
    <div>
      {beforeGame && (
        <BeforeGameCard
          onStart={() => {
            setCurrentIndex(0);
            setGameStart(new Date().getTime());
          }}
        />
      )}
      {gameRunning && (
        <CardRendering
          card={cardSequence[currentIndex]}
          mode={mode}
          onNext={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        />
      )}
      {gameEnded && <AfterGameCard gameEnd={gameEnd} gameStart={gameStart} />}
    </div>
  );
}
