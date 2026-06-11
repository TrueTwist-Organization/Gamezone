import { GameImage } from "@/components/game-image";
import Link from "next/link";
import { siteAssets } from "@/lib/public-paths";
import type { RankItem } from "@/lib/types";

type FunRanksProps = {
  ranks: RankItem[];
};

export function FunRanks({ ranks }: FunRanksProps) {
  return (
    <section
      id="FunRanks"
      className="px-3 py-5 md:px-8"
      style={{
        backgroundImage: `url(${siteAssets.funRanksBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto md:max-w-5xl">
        <h2 className="text-xl font-semibold text-white">Fun Ranks</h2>
        <ol className="mt-4">
          {ranks.map((item) => (
            <li key={item.rank} className="rounded-xl bg-white px-4 py-3 shadow">
              <Link href={item.href} className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-purple)] text-sm font-bold text-white">
                  {item.rank}
                </span>
                <GameImage
                  src={item.image}
                  alt={item.title}
                  width={140}
                  height={96}
                  className="rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="max-w-[180px] truncate font-semibold">{item.title}</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-2 py-1 text-xs font-bold text-white">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-600">Score {item.score.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="line-clamp-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
