import listDataJson from "./list-data.json";
import type { ListGameItem } from "./types";

export const listData = listDataJson;
export const LIST_BATCH_SIZE = 24;

export type ListCategorySlug = "puzzle" | "hypercasual" | "girls" | "arcade";

const categoryMap = listDataJson.categoryMap as Record<ListCategorySlug, string>;

export function getGamesForList(category?: string | null): ListGameItem[] {
  if (!category) {
    return listDataJson.all as ListGameItem[];
  }

  const mapped = categoryMap[category as ListCategorySlug];
  if (!mapped) {
    return listDataJson.all as ListGameItem[];
  }

  const byCategory = listDataJson.byCategory as Record<string, ListGameItem[]>;
  return byCategory[mapped] ?? [];
}
