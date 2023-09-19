import React from "react";
import { NbaPlayers } from "../../NBA";
import { MlbStatBox } from "../../MLB";

// import "../../styles/StatBox.css";

export const StatBox = ({ away, home, league }: any) => {
  let awayTeam, homeTeam;
  if (league === "NBA") {
    awayTeam = <NbaPlayers {...away} />;
    homeTeam = <NbaPlayers {...home} />;
  } else if (league === "MLB") {
    awayTeam = <MlbStatBox {...away} />;
    homeTeam = <MlbStatBox {...home} />;
  }

  return (
    <div className="stat-box">
      <div className="stat-box-team away-stats">{awayTeam}</div>
      <div className="stat-box-team home-stats">{homeTeam}</div>
    </div>
  );
};
