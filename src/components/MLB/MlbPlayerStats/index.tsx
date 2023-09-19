import React from "react";
import Score from "../../Scoreboard/ScoreCell";

import type { MlbPlayerStatsProps } from "./types";

export const MlbPlayerStats = ({
  playerKeys,
  playerFields,
  abbr,
  players,
}: MlbPlayerStatsProps) => {
  let fields: string[] = [];
  if (playerFields) {
    fields = [abbr, ...playerFields];
  }

  return (
    <div className="player-stats">
      <div className="player-stats-headers">
        {fields.map((field, i) => {
          return (
            <div
              key={`stats-header-${i}`}
              className={`stats-header position-${i}`}
            >
              <Score score={field} />
            </div>
          );
        })}
      </div>
      {players.map((player, i) => {
        return (
          <div className="player-stats-div" key={`player-div-${i}`}>
            {playerKeys.map((key, i) => {
              return (
                <div
                  key={`stats-player-${i}`}
                  className={`player-stats-div position-${i}`}
                >
                  <Score
                    score={
                      i !== 0 && typeof player[key] === "string"
                        ? player[key].substring(0, 4)
                        : player[key]
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
