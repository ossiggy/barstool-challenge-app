import React from "react";
import Score from "../../Scoreboard/ScoreCell";
import { MlbScoreRow } from "../MlbScoreRow";
import type { GameStatsSchemaBaseProps } from "@/components/types";
// import "../../styles/MlbScore.css";

export interface MlbScore {
  data: GameStatsSchemaBaseProps;
  marker: string;
  period: number;
}

export const MlbScore = ({ data, marker, period }: MlbScore) => {
  const {
    stats,
    totals,
    away_team,
    home_team,
    home_period_scores,
    away_period_scores,
  } = data;

  let homeScoreByInning;
  if (marker !== "bot" && period && period <= 9) {
    homeScoreByInning = home_period_scores.slice(0, period - 1);
  } else {
    homeScoreByInning = home_period_scores.slice(0, period);
  }

  const awayScoreByInning = away_period_scores.slice(0, period);

  const headers = new Array(9);

  return (
    <div className="scoreboard-container">
      <div id="headers">
        <div className="box-info-col"></div>
        {headers.map((header, i) => {
          return (
            <div className="box-info-col" key={`${header}-${i}`}>
              <Score score={i + 1} />
            </div>
          );
        })}
        <div className="box-info-col header">
          <Score key="header-runs" score="R" />
        </div>
        <div className="box-info-col header">
          <Score key="header-hits" score="H" />
        </div>
        <div className="box-info-col header" id="errors-header">
          <Score key="header-errors" score="E" />
        </div>
      </div>
      <MlbScoreRow
        team={away_team}
        type="away"
        scores={awayScoreByInning}
        hits={totals.away.hits}
        errors={stats.away._errors}
        headers={headers}
      />
      <MlbScoreRow
        team={home_team}
        type="home"
        scores={homeScoreByInning}
        hits={totals.home.hits}
        errors={stats.home._errors}
        headers={headers}
      />
    </div>
  );
};
