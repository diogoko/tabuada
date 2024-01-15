import { GameMode } from "./GameMode";

export interface BeforeGameCardProps {
  onStart: () => void;
  mode: GameMode;
}

export default function BeforeGameCard({ onStart, mode }: BeforeGameCardProps) {
  return (
    <div
      className="cursor-pointer select-none text-5xl"
      onClick={() => onStart()}
    >
      {mode === GameMode.Question ? "?" : "!"}
    </div>
  );
}
