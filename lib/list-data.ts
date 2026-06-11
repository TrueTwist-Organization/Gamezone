import listData from "./list-data.json";
import type { ListGameItem } from "./types";

export const LIST_BATCH_SIZE = 24;

export type ListCategorySlug = "puzzle" | "hypercasual" | "girls" | "arcade";

const categoryMap = listData.categoryMap as Record<ListCategorySlug, string>;

export function getGamesForList(category?: string | null): ListGameItem[] {
  if (!category) {
    return listData.all as ListGameItem[];
  }

  const mapped = categoryMap[category as ListCategorySlug];
  if (!mapped) {
    return listData.all as ListGameItem[];
  }

  const byCategory = listData.byCategory as Record<string, ListGameItem[]>;
  return byCategory[mapped] ?? [];
}
