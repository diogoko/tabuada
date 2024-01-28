import BaseCard from "./BaseCard";
import { Card } from "./Card";
import { GameMode } from "./GameMode";

export interface CardRenderingProps {
  card: Card;
  mode: GameMode;
  onNext: () => void;
}

export default function CardRendering({
  card,
  mode,
  onNext,
}: CardRenderingProps) {
  return (
    <BaseCard onClick={() => onNext()}>
      {mode === GameMode.Question ? card.question : card.answer}
    </BaseCard>
  );
}
