import { notFound } from "next/navigation";
import { GameDetailView } from "@/components/game-detail-view";
import { getAllGameIds, getGameDetail } from "@/lib/game-details";
import { toPublicGameDetail } from "@/lib/public-game";
import { sitePageTitle } from "@/lib/site";

type GamePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllGameIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: GamePageProps) {
  const { id } = await params;
  const game = getGameDetail(id);
  if (!game) return { title: sitePageTitle("Game Not Found") };
  return { title: sitePageTitle(game.title) };
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params;
  const game = getGameDetail(id);
  if (!game) notFound();
  return <GameDetailView game={toPublicGameDetail(game)} />;
}
