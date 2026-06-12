import type { GameDetail, RecommendedGame } from "./types";
import { gameEmbedPath, gameImagePath, gamePagePath } from "./public-paths";

export type PublicGameDetail = Omit<GameDetail, "playUrl" | "image"> & {
  image: string;
  embedPath: string;
  recommended: PublicRecommendedGame[];
};

export type PublicRecommendedGame = RecommendedGame & {
  image: string;
};

export function resolveGameId(game: { id?: string; href: string }): string {
  if (game.id) return game.id;
  const match = game.href.match(/\/games\/(\d+)/);
  return match?.[1] ?? "";
}

export function toPublicGameDetail(game: GameDetail): PublicGameDetail {
  const { playUrl: _playUrl, image: _image, ...rest } = game;

  return {
    ...rest,
    href: game.href.endsWith("/") ? game.href : `${game.href}/`,
    image: gameImagePath(game.id),
    embedPath: gameEmbedPath(game.id),
    recommended: game.recommended.map((item) => ({
      ...item,
      image: gameImagePath(item.id),
    })),
  };
}

export function toPublicGameCard(game: { id?: string; title: string; image: string; href: string }) {
  const id = resolveGameId(game);
  return {
    id,
    title: game.title,
    href: gamePagePath(id),
    image: gameImagePath(id),
  };
}
