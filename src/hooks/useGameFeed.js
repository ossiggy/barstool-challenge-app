import { useState, useEffect } from 'react';

const useGameFeed = (feedUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const getGameData = async () => {
      setIsError(false);
      setLoading(true);
      try {
        console.log(feedUrl);
        const response = await fetch(feedUrl);
        const gameData = await response.json();
        setData(gameData);
      } catch (err) {
        setIsError(true);
      }
      setLoading(false);
    }
    getGameData();
  }, [feedUrl])

  return [data, loading, isError];
};

export default useGameFeed;