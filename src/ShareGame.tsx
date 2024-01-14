import { GameSettings, encodeGameSettings } from "./GameSettings";

export interface ShareGameProps {
  gameSettings: GameSettings;
  onPlay: () => void;
}

export default function ShareGame({ gameSettings, onPlay }: ShareGameProps) {
  const gameCode = encodeGameSettings(gameSettings);

  return (
    <div className="flex flex-col gap-10">
      <div>{gameCode}</div>
      <div>
        <button
          className="border-2 border-gray-100 rounded-xl p-6 w-full md:w-2/3 cursor-pointer bg-teal-800 hover:border-teal-500 hover:bg-teal-700 disabled:bg-gray-700"
          type="button"
          onClick={() => onPlay()}
        >
          Play
        </button>
      </div>
    </div>
  );
}
