export type GameItem = {
  title: string;
  image: string;
  href: string;
  id?: string;
};

export type RankItem = GameItem & {
  rank: number;
  category: string;
  score: number;
  description: string;
};

export type RecommendedGame = {
  id: string;
  title: string;
  image: string;
};

export type GameDetail = GameItem & {
  id: string;
  badge: string;
  category: string;
  score: number;
  updated: string;
  tags: string[];
  howToPlay: string;
  description: string;
  editorsView: string;
  playUrl: string;
  recommended: RecommendedGame[];
};

export type SiteData = {
  hero: GameItem;
  popular: GameItem[];
  hotPicks: GameItem[];
  funRanks: RankItem[];
  trending: GameItem[];
};

export type ListGameItem = {
  id: string;
  title: string;
  image: string;
  href: string;
  category: string;
  score: number;
};
