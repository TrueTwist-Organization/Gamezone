import { getGameDetail } from "./game-details";

export function getGameImageSource(id: string): string | undefined {
  return getGameDetail(id)?.image;
}

export function getGamePlaySource(id: string): string | undefined {
  const playUrl = getGameDetail(id)?.playUrl;
  if (!playUrl) {
    return undefined;
  }
  return playUrl.endsWith("/") ? playUrl : `${playUrl}/`;
}
