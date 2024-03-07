import BaseCard from "./BaseCard";

export interface AfterGameCardProps {
  gameEnd: number;
  gameStart: number;
  onRestart: () => void;
}

export default function AfterGameCard({
  gameEnd,
  gameStart,
  onRestart,
}: AfterGameCardProps) {
  const empty = !gameEnd || !gameStart;
  const seconds = (gameEnd - gameStart) / 1000;

  return (
    <BaseCard onClick={() => onRestart()}>
      <span className="text-green-300">{empty || seconds.toFixed(1)} s</span>
    </BaseCard>
  );
}
