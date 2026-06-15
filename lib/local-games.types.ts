export type LocalGameEntry = {
  slug: string;
  title?: string;
};

export type LocalGamesRegistry = {
  updatedAt: string;
  games: Record<string, LocalGameEntry>;
};

export type LocalGameFolder = {
  slug: string;
  hasIndex: boolean;
  fileCount: number;
  linkedGameId?: string;
};
