import { getGameDetail } from "./game-details";
import { getLocalGamePlayUrl } from "./local-games-registry";

export function getGameImageSource(id: string): string | undefined {
  return getGameDetail(id)?.image;
}

export function getGamePlaySource(id: string): string | undefined {
  const localPlayUrl = getLocalGamePlayUrl(id);
  if (localPlayUrl) {
    return localPlayUrl;
  }

  const playUrl = getGameDetail(id)?.playUrl;
  if (!playUrl) {
    return undefined;
  }
  return playUrl.endsWith("/") ? playUrl : `${playUrl}/`;
}
