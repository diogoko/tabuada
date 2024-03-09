import { BsWhatsapp } from "react-icons/bs";
import Button from "./Button";
import {
  GameSettings,
  createGameUrl,
  createWhatsappUrl,
  encodeGameSettings,
} from "./GameSettings";

export interface ShareGameProps {
  gameSettings: GameSettings;
  onPlay: () => void;
}

export default function ShareGame({ gameSettings, onPlay }: ShareGameProps) {
  const gameCode = encodeGameSettings(gameSettings);

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex gap-5 items-center">
        <div className="text-3xl tracking-widest text-center">{gameCode}</div>

        <Button
          size="small"
          onClick={() => {
            const gameUrl = createGameUrl(gameCode || "");
            window.location.href = createWhatsappUrl(gameUrl);
          }}
        >
          <BsWhatsapp />
        </Button>
      </div>
      <div>
        <Button onClick={() => onPlay()}>Play</Button>
      </div>
    </div>
  );
}
