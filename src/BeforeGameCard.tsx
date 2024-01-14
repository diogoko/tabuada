export interface BeforeGameCardProps {
  onStart: () => void;
}

export default function BeforeGameCard({ onStart }: BeforeGameCardProps) {
  return (
    <div
      className="cursor-pointer select-none text-5xl"
      onClick={() => onStart()}
    >
      ?
    </div>
  );
}
