import countdownSound from "./assets/countdown.mp3";
import pageTurnSound from "./assets/page-turn.mp3";
import gameEndedSound from "./assets/game-ended.mp3";

export function playAudio(file: string) {
  return new Promise<void>((success) => {
    const audio = new Audio(file);

    const endedHandler = () => {
      audio.removeEventListener("ended", endedHandler);
      success();
    };
    audio.addEventListener("ended", endedHandler);

    audio.play();
    console.log("playing", file);
  });
}

export const COUNTDOWN_LENGTH_MS = 3037;

export function playCountdown() {
  return playAudio(countdownSound);
}

export function playPageTurn() {
  return playAudio(pageTurnSound);
}

export function playGameEnded() {
  return playAudio(gameEndedSound);
}
