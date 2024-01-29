import { useCallback, useEffect, useMemo, useState } from "react";
import { Card } from "./Card";
import { GameMode } from "./GameMode";
import CardRendering from "./CardRendering";
import BeforeGameCard from "./BeforeGameCard";
import AfterGameCard from "./AfterGameCard";
import { GameSettings } from "./GameSettings";
import seededRandomIntFn from "./seededRandomIntFn";
import generateCardSequence from "./generateCardSequence";

const GAME_SIZE = 10;

export interface GameProps {
  gameSettings: GameSettings;
  mode: GameMode;
}

export default function Game({ gameSettings, mode }: GameProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [gameStart, setGameStart] = useState<number>(0);
  const [gameEnd, setGameEnd] = useState<number | undefined>();

  const randomInt = useMemo(
    () => seededRandomIntFn(gameSettings.seed),
    [gameSettings.seed]
  );

  const [cardSequence, setCardSequence] = useState<Card[]>([]);

  const prepareNewGame = useCallback(() => {
    setCardSequence(
      generateCardSequence(gameSettings.cardSets, randomInt, GAME_SIZE)
    );
    setCurrentIndex(-1);
  }, [gameSettings.cardSets, randomInt]);

  useEffect(() => prepareNewGame(), [prepareNewGame]);

  const beforeGame = currentIndex < 0;
  const gameRunning = currentIndex >= 0 && currentIndex < cardSequence.length;
  const gameEnded = currentIndex >= cardSequence.length;

  useEffect(() => {
    if (currentIndex >= cardSequence.length) {
      setGameEnd(new Date().getTime());
    }
  }, [currentIndex, cardSequence.length]);

  if (beforeGame) {
    return (
      <BeforeGameCard
        onStart={() => {
          setCurrentIndex(0);
          setGameStart(new Date().getTime());
          setGameEnd(undefined);
        }}
        mode={mode}
      />
    );
  }

  if (gameRunning) {
    return (
      <CardRendering
        card={cardSequence[currentIndex]}
        mode={mode}
        onNext={() => {
          setCurrentIndex(currentIndex + 1);
        }}
      />
    );
  }

  if (gameEnded) {
    return (
      <AfterGameCard
        gameEnd={gameEnd}
        gameStart={gameStart}
        onRestart={() => prepareNewGame()}
      />
    );
  }
}
