import BaseCard from "./BaseCard";
import { GameMode } from "./GameMode";
import { playCountdown } from "./audio";

export interface BeforeGameCardProps {
  onStart: () => void;
  mode: GameMode;
}

export default function BeforeGameCard({ onStart, mode }: BeforeGameCardProps) {
  return (
    <BaseCard
      onClick={async () => {
        if (mode === GameMode.Answer) {
          await playCountdown();
        }
        onStart();
      }}
    >
      <span className="text-amber-300">
        {mode === GameMode.Question ? "?" : "!"}
      </span>
    </BaseCard>
  );
}
