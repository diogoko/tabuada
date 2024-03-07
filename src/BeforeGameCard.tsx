import BaseCard from "./BaseCard";
import { GameMode } from "./GameMode";

export interface BeforeGameCardProps {
  onStart: () => void;
  mode: GameMode;
}

export default function BeforeGameCard({ onStart, mode }: BeforeGameCardProps) {
  return (
    <BaseCard onClick={() => onStart()}>
      <span className="text-amber-300">
        {mode === GameMode.Question ? "?" : "!"}
      </span>
    </BaseCard>
  );
}
