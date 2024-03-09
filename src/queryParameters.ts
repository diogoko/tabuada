export function getQueryParameter(name: string) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
