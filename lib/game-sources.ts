import { getGameDetail } from "./game-details";

export function getGameImageSource(id: string): string | undefined {
  return getGameDetail(id)?.image;
}

export function getGamePlaySource(id: string): string | undefined {
  return getGameDetail(id)?.playUrl;
}
