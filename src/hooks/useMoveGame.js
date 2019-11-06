import { useState } from "react";

const useMoveGame = league => {
  const [period, setPeriod] = useState(0);
  const [status, setStatus] = useState("pending");
  const [marker, setMarker] = useState("bot");
  const [buttonText, setButtonText] = useState("Start Game");

  const updateMlbMarker = mark => {
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

  const setNewGame = () => {
    setPeriod(0);
    setStatus("pending");
    setMarker("bot");
    setButtonText("Start Game");
  };

  const incrementMlb = (mark, inning) => {
    if (status === "completed") {
      setNewGame();
    } else if (inning === 9 && mark === "bot") {
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

  const incrementNba = (mark, quarter) => {
    if (status === "completed") {
      setNewGame();
    } else if (quarter === 4) {
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

  const incrementGame = (marker, period) => {
    if (league === "MLB") {
      incrementMlb(marker, period);
    } else if (league === "NBA") {
      incrementNba(marker, period);
    }
  };

  return [period, status, marker, buttonText, incrementGame];
};

export default useMoveGame;
