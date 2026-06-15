"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { GamePlayModal } from "@/components/game-play-modal";
import { getGamePlaySource } from "@/lib/game-sources";
import { gameDirectPlayPath } from "@/lib/public-paths";

type ActiveGame = {
  id: string;
  title: string;
};

type GamePlayContextValue = {
  openGame: (game: ActiveGame) => void;
  closeGame: () => void;
};

const GamePlayContext = createContext<GamePlayContextValue | null>(null);

export function GamePlayProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [activeGame, setActiveGame] = useState<ActiveGame | null>(null);

  const openGame = useCallback((game: ActiveGame) => {
    setActiveGame(game);
  }, []);

  const closeGame = useCallback(() => {
    setActiveGame(null);
  }, []);

  useEffect(() => {
    setActiveGame(null);
  }, [pathname]);

  const value = useMemo(
    () => ({
      openGame,
      closeGame,
    }),
    [openGame, closeGame],
  );

  return (
    <GamePlayContext.Provider value={value}>
      {children}
      <GamePlayModal
        open={activeGame !== null}
        title={activeGame?.title ?? ""}
        playSrc={
          activeGame ? gameDirectPlayPath(activeGame.id, getGamePlaySource(activeGame.id)) : ""
        }
        onClose={closeGame}
      />
    </GamePlayContext.Provider>
  );
}

export function useGamePlay() {
  const context = useContext(GamePlayContext);
  if (!context) {
    throw new Error("useGamePlay must be used within GamePlayProvider");
  }
  return context;
}
