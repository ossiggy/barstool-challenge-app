import React from "react";
import Players from "../nba/Players";
import MlbStatBox from "../mlb/MlbStatBox";

import "../../styles/StatBox.css";

export default function StatBox(props) {
  let home;
  let away;
  if (props.type === "NBA") {
    away = <Players {...props.away} />;
    home = <Players {...props.home} />;
  } else if (props.type === "MLB") {
    away = <MlbStatBox {...props.away} />;
    home = <MlbStatBox {...props.home} />;
  }

  return (
    <div className="stat-box">
      <div className="stat-box-team away-stats">{away}</div>
      <div className="stat-box-team home-stats">{home}</div>
    </div>
  );
}
