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
    <div
      className="cursor-pointer select-none text-5xl"
      onClick={() => onRestart()}
    >
      {empty || seconds.toFixed(1)} s
    </div>
  );
}
