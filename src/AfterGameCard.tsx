export interface AfterGameCardProps {
  gameEnd: number;
  gameStart: number;
}

export default function AfterGameCard({
  gameEnd,
  gameStart,
}: AfterGameCardProps) {
  const empty = !gameEnd || !gameStart;
  const seconds = (gameEnd - gameStart) / 1000;

  return (
    <div className="cursor-default select-none text-5xl">
      {empty || seconds.toFixed(1)} s
    </div>
  );
}
