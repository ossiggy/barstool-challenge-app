import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PlayerStats from "./PlayerStats";
import { pitching, batting } from "../fields";

export default function MlbStatBox({ batters, pitchers }) {
  const [viewing, setViewing] = useState("batters");
  const handleClick = (e, view) => {
    e.preventDefault();
    setViewing(view);
  };

  let viewStats;

  if (viewing === "batters") {
    viewStats = (
      <PlayerStats
        keys={batting}
        abbr={batters[0].team_abbreviation}
        players={batters}
      />
    );
  } else if (viewing === "pitchers") {
    viewStats = (
      <PlayerStats
        keys={pitching}
        abbr={pitchers[0].team_abbreviation}
        players={pitchers}
      />
    );
  }

  return (
    <div className="mlb-stat-box">
      <div className="mlb-button-box">
        <Button
          className="mlb-stat-box-button"
          variant="outline-secondary"
          onClick={e => handleClick(e, "batters")}
        >
          Batting
        </Button>
        <Button
          className="mlb-stat-box-button"
          variant="outline-secondary"
          onClick={e => handleClick(e, "pitchers")}
        >
          Pitching
        </Button>
      </div>
      <div className="player-stats">{viewStats}</div>
    </div>
  );
}
