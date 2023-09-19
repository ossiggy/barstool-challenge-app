"use client";
import { cloneElement } from "react";
import { objectIsTruthy } from "@/helpers";
import { TeamInfo } from "./TeamInfo";
import { StatBox } from "./StatBox";
import { GameStatus } from "./GameStatus";
import { useMoveGame } from "@/hooks";
import type { ScoreboardPropTypes } from "./types";

export const Scoreboard = ({ league, data, children }: ScoreboardPropTypes) => {
  const { period, status, marker, buttonText, incrementGame } =
    useMoveGame(league);

  const handleClick = () => {
    incrementGame(marker, period);
  };

  let startDateTime: Date | string = "",
    stats,
    homeTeam,
    awayTeam;

  if (data && objectIsTruthy(data)) {
    startDateTime = data.event_information.start_date_time;
    stats = data.stats;
    homeTeam = data.home_team;
    awayTeam = data.away_team;
  }
  const newProps = { data, period, marker };
  const childrenWithProps = cloneElement(children, newProps);

  return (
    <div id="scoreboard">
      <div id="team-info-container">
        <TeamInfo
          cityName={awayTeam?.first_name || ""}
          teamName={awayTeam?.last_name || ""}
          status="away"
        />
        <GameStatus
          status={status}
          startDateTime={startDateTime}
          period={period}
          marker={marker}
        />
        <TeamInfo
          cityName={homeTeam?.first_name || ""}
          teamName={homeTeam?.last_name || ""}
          status="home"
        />
      </div>
      {childrenWithProps}
      <StatBox away={stats.away} home={stats.home} league={league} />
      <div className="start-button-container">
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};
