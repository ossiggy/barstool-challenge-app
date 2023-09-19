import React from "react";
import styles from "./teamInfo.module.css";

import type { TeamInfoProps } from "./types";

export const TeamInfo = ({ status, cityName, teamName }: TeamInfoProps) => {
  return (
    <div className={`${styles.teamInfoBox} ${status}`}>
      <div className="team-city">{cityName}</div>
      <div className="team-name">{teamName}</div>
    </div>
  );
};
