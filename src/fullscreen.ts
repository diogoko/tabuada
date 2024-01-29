export function enterFullScreen() {
  document.documentElement.requestFullscreen({ navigationUI: "hide" });
}
