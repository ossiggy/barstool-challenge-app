import { useState, useEffect } from "react";
import type { GameStatsSchemaBaseProps } from "@/components/types";

export const useGameFeed = (feedUrl: string) => {
  const [data, setData] = useState<GameStatsSchemaBaseProps>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGameData = async () => {
      setLoading(true);
      setIsError(false);
      try {
        const response = await fetch(feedUrl);
        const gameData = await response.json();
        setData(gameData);
      } catch (err) {
        return setIsError(true);
      }
      return setLoading(false);
    };
    getGameData();
  }, [feedUrl]);

  return { data, loading, isError };
};
