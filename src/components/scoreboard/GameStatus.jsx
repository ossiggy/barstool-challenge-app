import React from "react";

import "../../styles/GameStatus.css";

export default function GameStatus({ status, startDateTime, period, marker }) {
  // automatically adjusts for EST
  const startTime = new Date(startDateTime).getHours();
  const startDate = new Date(startDateTime).toDateString();

  let vs;
  let date;
  let mark;
  let timezone;

  if (status === "completed") {
    vs = <div id="vs">Final</div>;
  } else if (status === "pending") {
    vs = (
      <div id="vs">
        {startTime > 12 ? `${startTime - 12}pm` : `${startTime}am`}
      </div>
    );
    timezone = <div id="timezone">est</div>;
    date = (
      <div id="date">
        {startDate.substring(0, startDate.indexOf("201")).trim()}
      </div>
    );
  } else if (status === "in progress") {
    if (marker && marker.length) {
      if (marker !== "Half") {
        mark = <div id="mark">{marker}</div>;
        vs = <div id="vs">{period}</div>;
      }
      mark = <div id="mark">{marker}</div>;
    }
  }

  return (
    <div id="status" className="team-info-box">
      {mark}
      {vs}
      {timezone}
      {date}
    </div>
  );
}
