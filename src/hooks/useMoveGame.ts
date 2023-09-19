import { useState } from "react";

export const useMoveGame = (league: string) => {
  const [period, setPeriod] = useState(0);
  const [status, setStatus] = useState("pending");
  const [marker, setMarker] = useState("bot");
  const [buttonText, setButtonText] = useState("Start Game");

  const setNewGame = () => {
    setPeriod(0);
    setStatus("pending");
    setMarker("bot");
    setButtonText("Start Game");
  };

  const updateMlbMarker = (mark: string) => {
    switch (mark) {
      case "top":
        return "mid";
      case "mid":
        return "bot";
      case "bot":
        return "top";
      default:
        return "";
    }
  };

  const incrementMlb = (mark: string, inning: number) => {
    if (inning === 9 && mark === "bot") {
      setStatus("completed");
      setButtonText("Reset");
    } else if (mark === "bot") {
      setPeriod((inning += 1));
      setStatus("in progress");
      setMarker(updateMlbMarker(mark));
      setButtonText("Next");
    } else {
      setMarker(updateMlbMarker(mark));
    }
  };

  const incrementNba = (mark: string, quarter: number) => {
    if (quarter === 4) {
      setStatus("completed");
      setMarker("");
      setButtonText("Reset");
    } else if (quarter === 2 && mark !== "Half") {
      setMarker("Half");
      setButtonText("Next");
    } else {
      setPeriod((quarter += 1));
      setMarker("");
      setButtonText("Next");
    }
  };

  const incrementGame = (mark: string, period: number) => {
    if (status === "completed") {
      setNewGame();
    } else if (league === "MLB") {
      incrementMlb(mark, period);
    } else if (league === "NBA") {
      incrementNba(mark, period);
    }
  };

  return { period, status, marker, buttonText, incrementGame };
};
