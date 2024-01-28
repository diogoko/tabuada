import Button from "./Button";
import { GameSettings, encodeGameSettings } from "./GameSettings";

export interface ShareGameProps {
  gameSettings: GameSettings;
  onPlay: () => void;
}

export default function ShareGame({ gameSettings, onPlay }: ShareGameProps) {
  const gameCode = encodeGameSettings(gameSettings);

  return (
    <div className="flex flex-col gap-10">
      <div className="text-3xl tracking-widest text-center">{gameCode}</div>
      <div>
        <Button onClick={() => onPlay()}>Play</Button>
      </div>
    </div>
  );
}
