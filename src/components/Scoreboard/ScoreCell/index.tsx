import React from "react";
// import "../../styles/Score.css";

const ScoreCell = ({ score }: { score: string | number }) => {
  return <div className="score-cell">{score}</div>;
};

export default React.memo(ScoreCell);
