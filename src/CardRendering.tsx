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
    <div
      onClick={() => onNext()}
      className="cursor-pointer select-none text-5xl"
    >
      {mode === GameMode.Question ? card.question : card.answer}
    </div>
  );
}
